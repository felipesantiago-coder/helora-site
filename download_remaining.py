#!/usr/bin/env python3
"""Download remaining logos with longer timeout and retry."""

import os
import subprocess
from PIL import Image

OUTPUT_DIR = '/home/z/helora-site/public/convenios'
MAX_DIM = 800
WEBP_QUALITY = 88

LOGOS = [
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

def process_image(slug, url):
    out_path = os.path.join(OUTPUT_DIR, f'{slug}.webp')
    
    for attempt in range(3):
        try:
            result = subprocess.run(
                ['curl', '-sL', '--connect-timeout', '15', '--max-time', '60', '-o', '/tmp/logo_raw', url],
                capture_output=True, timeout=90
            )
            if result.returncode != 0 or os.path.getsize('/tmp/logo_raw') < 100:
                if attempt < 2:
                    print(f'    retry {attempt+2}...', end=' ', flush=True)
                    continue
                return f'curl failed (rc={result.returncode})'
        except subprocess.TimeoutExpired:
            if attempt < 2:
                print(f'    retry {attempt+2}...', end=' ', flush=True)
                continue
            return 'download timeout'
        break
    else:
        return 'all retries failed'

    raw_size = os.path.getsize('/tmp/logo_raw')

    try:
        img = Image.open('/tmp/logo_raw')
        img.load()
    except Exception as e:
        if 'avif' in url.lower():
            r = subprocess.run(
                ['ffmpeg', '-i', '/tmp/logo_raw', '-y', '/tmp/logo_conv.png'],
                capture_output=True, timeout=30
            )
            if r.returncode == 0 and os.path.exists('/tmp/logo_conv.png'):
                img = Image.open('/tmp/logo_conv.png')
                img.load()
            else:
                return f'AVIF convert failed: {e}'
        else:
            return str(e)

    orig_w, orig_h = img.size

    if img.mode == 'P':
        img = img.convert('RGBA')
    elif img.mode == 'RGB':
        img = img.convert('RGBA')
    elif img.mode not in ('RGBA', 'LA'):
        img = img.convert('RGBA')

    if max(orig_w, orig_h) > MAX_DIM:
        ratio = MAX_DIM / max(orig_w, orig_h)
        new_w, new_h = int(orig_w * ratio), int(orig_h * ratio)
        img = img.resize((new_w, new_h), Image.LANCZOS)
        dims = f'{orig_w}x{orig_h} -> {new_w}x{new_h}'
    else:
        dims = f'{orig_w}x{orig_h} (original)'

    img.save(out_path, 'WEBP', quality=WEBP_QUALITY, method=6)
    webp_size = os.path.getsize(out_path)
    print(f'OK  {dims}  {webp_size:>6,} B')
    return None

for slug, url in LOGOS:
    skip = os.path.exists(os.path.join(OUTPUT_DIR, f'{slug}.webp'))
    if skip:
        print(f'  {slug}... SKIP (already exists)')
        continue
    print(f'  {slug}...', end=' ', flush=True)
    err = process_image(slug, url)
    if err:
        print(f'FAIL  {err}')

print(f'\nTotal WebP files: {len([f for f in os.listdir(OUTPUT_DIR) if f.endswith(".webp")])}')
