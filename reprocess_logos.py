#!/usr/bin/env python3
"""
Re-download originals and apply conservative background removal.
Previous version was too aggressive — removed light-colored logo elements.
"""

import os
import subprocess
from PIL import Image
import numpy as np

OUTPUT_DIR = '/home/z/helora-site/public/convenios'
MAX_DIM = 800
WEBP_QUALITY = 90  # slightly higher quality
THRESHOLD = 18  # much tighter: only exact background matches

LOGOS = [
    ('afeb-brasal',      'https://i.ibb.co/KzDXmfbr/AFEB-BRASAL.png'),
    ('affego',           'https://i.ibb.co/XxM14ZX6/AFFEGO.png'),
    ('anafe-saude',      'https://i.ibb.co/tP4pxJJt/ANAFE-SA-DE.png'),
    ('bc-saude',         'https://i.ibb.co/27W0LBdh/BACEN-SA-DE.png'),
    ('bndes',            'https://i.ibb.co/Qv1TrVRB/BNDES-FAPES.png'),
    ('caeme',            'https://i.ibb.co/4R79mMsT/CAEME.png'),
    ('saude-caixa',      'https://i.ibb.co/nMvb7WC4/CAIXA-SA-DE.png'),
    ('camara-deputados', 'https://i.ibb.co/vxjZcMF3/C-MARA-DOS-DEPUTADOS.png'),
    ('care-plus',        'https://i.ibb.co/qFpMnFwf/CARE-PLUS.png'),
    ('casec',            'https://i.ibb.co/212XdRR0/CASEC.jpg'),
    ('casembrapa',       'https://i.ibb.co/xKGtLyj2/CASEMBRAPA.png'),
    ('cesan',            'https://i.ibb.co/q4qXBjc/CESAN.webp'),
    ('clique-medicos',   'https://i.ibb.co/S4TctML6/CLIQUE-M-DICOS.jpg'),
    ('cnti',             'https://i.ibb.co/zThvNwLH/CNTI.webp'),
    ('conab',            'https://i.ibb.co/PsKyxHyp/CONAB.png'),
    ('embratel',         'https://i.ibb.co/b5TwyMcG/EMBRATEL.webp'),
    ('fascal',           'https://i.ibb.co/rG80jLLv/FASCAL.png'),
    ('gdf-saude',        'https://i.ibb.co/wZY7qHTK/GDF-SA-DE.png'),
    ('geap',             'https://i.ibb.co/FkFgTYwp/GEAP-SA-DE.png'),
    ('gravia',           'https://i.ibb.co/KpVYggG6/GRAVIA.jpg'),
    ('luminar-saude',    'https://i.ibb.co/670mX6kN/LUMINAR-SA-DE.jpg'),
    ('plan-assiste',     'https://i.ibb.co/1gG2VPf/MPU.jpg'),
    ('notre-drame',      'https://i.ibb.co/SSTm0yf/NOTRE-DAME-INTERM-DICA.png'),
    ('omint-saude',      'https://i.ibb.co/NgKc5Fp4/OMINT-SA-DE.png'),
    ('saude-petrobras',  'https://i.ibb.co/yBfGd3v3/SA-DE-PETROBRAS.jpg'),
    ('pf-saude',         'https://i.ibb.co/DfgdNgrb/PF-SA-DE.png'),
    ('pmdf',             'https://i.ibb.co/svPNPnZb/PMDF.jpg'),
    ('proasa',           'https://i.ibb.co/vxNVjdg9/PROASA.jpg'),
    ('pro-social-trf',   'https://i.ibb.co/W4sFgwHF/PRO-SOCIAL-TRF.webp'),
    ('real-grandeza',    'https://i.ibb.co/c4xwF6G/REAL-GRANDEZA.png'),
    ('saude-brb',        'https://i.ibb.co/Cp33t0dX/SA-DE-BRB.png'),
    ('serpro',           'https://i.ibb.co/cc1R8Nc1/SERPRO.png'),
    ('sis-senado',       'https://i.ibb.co/m5Tt02z1/SIS-SENADO.avif'),
    ('cbmdf',            'https://i.ibb.co/QFzKCnKp/CMBDF.jpg'),
    ('stj',              'https://i.ibb.co/N2VG8cWH/STJ.png'),
    ('plas-jmu-stm',     'https://i.ibb.co/vCBVrKjB/STM.png'),
    ('tjdft',            'https://i.ibb.co/fGSwj9rB/TJDFT.webp'),
    ('tre-saude',        'https://i.ibb.co/V798bwR/TRE-SA-DE.png'),
    ('trt',              'https://i.ibb.co/S4Qb566L/TRT-SA-DE.png'),
    ('unafisco-saude',   'https://i.ibb.co/Y72R9gzf/UNAFISCO-SA-DE.webp'),
    ('stf-med',          'https://i.ibb.co/PvZsr0vf/STF-MED.png'),
]


def download(url):
    """Download with retry."""
    for attempt in range(3):
        r = subprocess.run(
            ['curl', '-sL', '--connect-timeout', '15', '--max-time', '60', '-o', '/tmp/logo_raw', url],
            capture_output=True, timeout=90
        )
        if r.returncode == 0 and os.path.getsize('/tmp/logo_raw') > 100:
            return True
    return False


def open_image(url):
    """Open image, handling AVIF via ffmpeg."""
    try:
        img = Image.open('/tmp/logo_raw')
        img.load()
        return img
    except:
        if 'avif' in url.lower():
            subprocess.run(['ffmpeg', '-i', '/tmp/logo_raw', '-y', '/tmp/logo_conv.png'],
                           capture_output=True, timeout=30)
            if os.path.exists('/tmp/logo_conv.png'):
                img = Image.open('/tmp/logo_conv.png')
                img.load()
                return img
        return None


def remove_bg_conservative(img):
    """
    Conservative background removal:
    1. Detect bg color from corners (single pixels)
    2. Only remove pixels very close to bg color (tight threshold)
    3. No edge smoothing, no light-mask heuristic
    4. Single-pixel anti-aliasing at edges
    """
    img = img.convert('RGBA')
    arr = np.array(img, dtype=np.float32)
    rgb = arr[:, :, :3]
    h, w = arr.shape[:2]
    
    # Sample single corner pixels
    corners = [
        rgb[0, 0], rgb[0, w-1], rgb[h-1, 0], rgb[h-1, w-1]
    ]
    # Also sample near corners (2px offset) for robustness
    for y, x in [(2, 2), (2, w-3), (h-3, 2), (h-3, w-3)]:
        corners.append(rgb[y, x])
    
    # Use median of corner colors as background
    bg_color = np.median(np.array(corners), axis=0)
    
    # Calculate distance of each pixel to background
    diff = rgb - bg_color
    dist = np.sqrt(np.sum(diff ** 2, axis=2))
    
    # Create alpha: fully opaque by default
    new_alpha = np.full((h, w), 255, dtype=np.uint8)
    
    # Fully transparent for background
    new_alpha[dist < THRESHOLD] = 0
    
    # Anti-aliased edge: partial transparency for pixels at boundary
    edge_min = THRESHOLD
    edge_max = THRESHOLD * 1.8
    edge_mask = (dist >= edge_min) & (dist < edge_max)
    if np.any(edge_mask):
        # Linear interpolation of alpha in edge zone
        t = (dist[edge_mask] - edge_min) / (edge_max - edge_min)
        new_alpha[edge_mask] = (t * 255).astype(np.uint8)
    
    arr[:, :, 3] = new_alpha
    return Image.fromarray(arr.astype(np.uint8), 'RGBA')


ok = 0
fail = 0

for i, (slug, url) in enumerate(LOGOS):
    out_path = os.path.join(OUTPUT_DIR, f'{slug}.webp')
    print(f'  [{i+1:2d}/42] {slug}...', end=' ', flush=True)
    
    if not download(url):
        print(f'FAIL download')
        fail += 1
        continue
    
    img = open_image(url)
    if img is None:
        print(f'FAIL open')
        fail += 1
        continue
    
    orig_w, orig_h = img.size
    raw_size = os.path.getsize('/tmp/logo_raw')
    
    # Convert to RGBA
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Check if image already has transparency (skip bg removal)
    alpha_channel = img.split()[-1]
    alpha_min = alpha_channel.getextrema()[0]
    has_transparency = alpha_min < 250  # already has significant transparency
    
    # Resize if needed
    if max(orig_w, orig_h) > MAX_DIM:
        ratio = MAX_DIM / max(orig_w, orig_h)
        new_w, new_h = int(orig_w * ratio), int(orig_h * ratio)
        img = img.resize((new_w, new_h), Image.LANCZOS)
    
    # Remove background only if no existing transparency
    if not has_transparency:
        img = remove_bg_conservative(img)
    
    img.save(out_path, 'WEBP', quality=WEBP_QUALITY, method=6)
    webp_size = os.path.getsize(out_path)
    
    bg_info = 'had_alpha' if has_transparency else 'bg_removed'
    print(f'OK  {img.size[0]}x{img.size[1]}  {webp_size:>6} B  ({bg_info})')
    ok += 1

print(f'\nSuccess: {ok}/42  Failed: {fail}')
print(f'Total: {sum(os.path.getsize(os.path.join(OUTPUT_DIR, f)) for f in os.listdir(OUTPUT_DIR) if f.endswith(".webp")) / 1024:.1f} KB')
