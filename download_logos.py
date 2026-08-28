#!/usr/bin/env python3
"""
Baixar logos dos links ibb.co, processar e otimizar como WebP.
"""

import os
import subprocess
import json
from PIL import Image
import io

OUTPUT_DIR = '/home/z/helora-site/public/convenios'
MAX_DIM = 800  # max dimension, mantém proporção
WEBP_QUALITY = 88

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Ordem exata dos convênios com URLs
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
]

results = []
failed = []

def process_image(slug: str, url: str):
    """Download, process and save as optimized WebP."""
    out_path = os.path.join(OUTPUT_DIR, f'{slug}.webp')
    
    # Download with curl (handles redirects)
    result = subprocess.run(
        ['curl', '-sL', '-o', '/tmp/logo_raw', url],
        capture_output=True, timeout=30
    )
    if result.returncode != 0 or os.path.getsize('/tmp/logo_raw') < 100:
        return None, f'curl failed (rc={result.returncode})'
    
    raw_size = os.path.getsize('/tmp/logo_raw')
    
    # Try to open with Pillow
    try:
        img = Image.open('/tmp/logo_raw')
        img.load()  # force load to catch truncated files
    except Exception as e:
        # AVIF might not be supported, try converting via system tools
        if url.endswith('.avif'):
            # Try to convert AVIF to PNG using system tools
            r = subprocess.run(
                ['ffmpeg', '-i', '/tmp/logo_raw', '-y', '/tmp/logo_converted.png'],
                capture_output=True, timeout=30
            )
            if r.returncode == 0 and os.path.exists('/tmp/logo_converted.png'):
                img = Image.open('/tmp/logo_converted.png')
                img.load()
            else:
                return None, f'AVIF convert failed: {e}'
        else:
            return None, str(e)
    
    orig_w, orig_h = img.size
    
    # Convert to RGBA for transparency support
    if img.mode == 'P':
        img = img.convert('RGBA')
    elif img.mode == 'RGB':
        # Check if image has any transparency info
        img = img.convert('RGBA')
    elif img.mode not in ('RGBA', 'LA'):
        img = img.convert('RGBA')
    
    # Resize if larger than MAX_DIM (maintain aspect ratio)
    if max(orig_w, orig_h) > MAX_DIM:
        ratio = MAX_DIM / max(orig_w, orig_h)
        new_w = int(orig_w * ratio)
        new_h = int(orig_h * ratio)
        img = img.resize((new_w, new_h), Image.LANCZOS)
        resized = f'{orig_w}x{orig_h} -> {new_w}x{new_h}'
    else:
        resized = f'{orig_w}x{orig_h} (original)'
    
    # Save as optimized WebP
    img.save(out_path, 'WEBP', quality=WEBP_QUALITY, method=6)
    
    webp_size = os.path.getsize(out_path)
    return {
        'slug': slug,
        'raw_size': raw_size,
        'webp_size': webp_size,
        'dimensions': resized,
        'format': img.format or 'unknown',
    }, None


for i, (slug, url) in enumerate(LOGOS):
    print(f'  [{i+1:2d}/40] {slug}...', end=' ', flush=True)
    result, error = process_image(slug, url)
    if result:
        print(f'OK  {result["dimensions"]}  {result["webp_size"]:>6,} B  (was {result["raw_size"]:>6,} B)')
        results.append(result)
    else:
        print(f'FAIL  {error}')
        failed.append((slug, error))

print(f'\n{"="*60}')
print(f'Success: {len(results)}/40')
print(f'Failed:  {len(failed)}/40')

if results:
    total_raw = sum(r['raw_size'] for r in results)
    total_webp = sum(r['webp_size'] for r in results)
    print(f'Total raw:  {total_raw:>10,} bytes ({total_raw/1024:.1f} KB)')
    print(f'Total WebP: {total_webp:>10,} bytes ({total_webp/1024:.1f} KB)')
    if total_raw > 0:
        print(f'Compression: {(1 - total_webp/total_raw)*100:.1f}%')

if failed:
    print(f'\nFailed items:')
    for slug, err in failed:
        print(f'  - {slug}: {err}')

# Save results
with open('/home/z/my-project/logo-results.json', 'w') as f:
    json.dump({'results': results, 'failed': failed}, f, indent=2)
