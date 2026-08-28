#!/usr/bin/env python3
"""Re-download and re-process logos — batch version."""

import os, subprocess, sys
from PIL import Image
import numpy as np

OUTPUT_DIR = '/home/z/helora-site/public/convenios'
MAX_DIM = 800
THRESHOLD = 18

LOGOS = [
    ('afeb-brasal','https://i.ibb.co/KzDXmfbr/AFEB-BRASAL.png'),
    ('affego','https://i.ibb.co/XxM14ZX6/AFFEGO.png'),
    ('anafe-saude','https://i.ibb.co/tP4pxJJt/ANAFE-SA-DE.png'),
    ('bc-saude','https://i.ibb.co/27W0LBdh/BACEN-SA-DE.png'),
    ('bndes','https://i.ibb.co/Qv1TrVRB/BNDES-FAPES.png'),
    ('caeme','https://i.ibb.co/4R79mMsT/CAEME.png'),
    ('saude-caixa','https://i.ibb.co/nMvb7WC4/CAIXA-SA-DE.png'),
    ('camara-deputados','https://i.ibb.co/vxjZcMF3/C-MARA-DOS-DEPUTADOS.png'),
    ('care-plus','https://i.ibb.co/qFpMnFwf/CARE-PLUS.png'),
    ('casec','https://i.ibb.co/212XdRR0/CASEC.jpg'),
    ('casembrapa','https://i.ibb.co/xKGtLyj2/CASEMBRAPA.png'),
    ('cesan','https://i.ibb.co/q4qXBjc/CESAN.webp'),
    ('clique-medicos','https://i.ibb.co/S4TctML6/CLIQUE-M-DICOS.jpg'),
    ('cnti','https://i.ibb.co/zThvNwLH/CNTI.webp'),
    ('conab','https://i.ibb.co/PsKyxHyp/CONAB.png'),
    ('embratel','https://i.ibb.co/b5TwyMcG/EMBRATEL.webp'),
    ('fascal','https://i.ibb.co/rG80jLLv/FASCAL.png'),
    ('gdf-saude','https://i.ibb.co/wZY7qHTK/GDF-SA-DE.png'),
    ('geap','https://i.ibb.co/FkFgTYwp/GEAP-SA-DE.png'),
    ('gravia','https://i.ibb.co/KpVYggG6/GRAVIA.jpg'),
    ('luminar-saude','https://i.ibb.co/670mX6kN/LUMINAR-SA-DE.jpg'),
]

LOGOS2 = [
    ('plan-assiste','https://i.ibb.co/1gG2VPf/MPU.jpg'),
    ('notre-drame','https://i.ibb.co/SSTm0yf/NOTRE-DAME-INTERM-DICA.png'),
    ('omint-saude','https://i.ibb.co/NgKc5Fp4/OMINT-SA-DE.png'),
    ('saude-petrobras','https://i.ibb.co/yBfGd3v3/SA-DE-PETROBRAS.jpg'),
    ('pf-saude','https://i.ibb.co/DfgdNgrb/PF-SA-DE.png'),
    ('pmdf','https://i.ibb.co/svPNPnZb/PMDF.jpg'),
    ('proasa','https://i.ibb.co/vxNVjdg9/PROASA.jpg'),
    ('pro-social-trf','https://i.ibb.co/W4sFgwHF/PRO-SOCIAL-TRF.webp'),
    ('real-grandeza','https://i.ibb.co/c4xwF6G/REAL-GRANDEZA.png'),
    ('saude-brb','https://i.ibb.co/Cp33t0dX/SA-DE-BRB.png'),
    ('serpro','https://i.ibb.co/cc1R8Nc1/SERPRO.png'),
    ('sis-senado','https://i.ibb.co/m5Tt02z1/SIS-SENADO.avif'),
    ('cbmdf','https://i.ibb.co/QFzKCnKp/CMBDF.jpg'),
    ('stj','https://i.ibb.co/N2VG8cWH/STJ.png'),
    ('plas-jmu-stm','https://i.ibb.co/vCBVrKjB/STM.png'),
    ('tjdft','https://i.ibb.co/fGSwj9rB/TJDFT.webp'),
    ('tre-saude','https://i.ibb.co/V798bwR/TRE-SA-DE.png'),
    ('trt','https://i.ibb.co/S4Qb566L/TRT-SA-DE.png'),
    ('unafisco-saude','https://i.ibb.co/Y72R9gzf/UNAFISCO-SA-DE.webp'),
    ('stf-med','https://i.ibb.co/PvZsr0vf/STF-MED.png'),
]

batch = int(sys.argv[1]) if len(sys.argv) > 1 else 1
logos = LOGOS if batch == 1 else LOGOS2

def remove_bg_conservative(img):
    img = img.convert('RGBA')
    arr = np.array(img, dtype=np.float32)
    rgb = arr[:, :, :3]
    h, w = arr.shape[:2]
    corners = [rgb[0,0], rgb[0,w-1], rgb[h-1,0], rgb[h-1,w-1],
               rgb[2,2], rgb[2,w-3], rgb[h-3,2], rgb[h-3,w-3]]
    bg = np.median(np.array(corners), axis=0)
    diff = rgb - bg
    dist = np.sqrt(np.sum(diff**2, axis=2))
    alpha = np.full((h,w), 255, dtype=np.uint8)
    alpha[dist < THRESHOLD] = 0
    edge = (dist >= THRESHOLD) & (dist < THRESHOLD * 1.8)
    if np.any(edge):
        t = (dist[edge] - THRESHOLD) / (THRESHOLD * 0.8)
        alpha[edge] = (np.clip(t, 0, 1) * 255).astype(np.uint8)
    arr[:,:,3] = alpha
    return Image.fromarray(arr.astype(np.uint8), 'RGBA')

def process(slug, url):
    out = os.path.join(OUTPUT_DIR, f'{slug}.webp')
    for _ in range(3):
        r = subprocess.run(['curl','-sL','--connect-timeout','15','--max-time','60','-o','/tmp/lr',url],
                           capture_output=True, timeout=90)
        if r.returncode == 0 and os.path.getsize('/tmp/lr') > 100: break
    else: return False
    try:
        img = Image.open('/tmp/lr'); img.load()
    except:
        if 'avif' in url.lower():
            subprocess.run(['ffmpeg','-i','/tmp/lr','-y','/tmp/lc.png'], capture_output=True, timeout=30)
            if os.path.exists('/tmp/lc.png'): img = Image.open('/tmp/lc.png'); img.load()
            else: return False
        else: return False
    if img.mode != 'RGBA': img = img.convert('RGBA')
    amin = img.split()[-1].getextrema()[0]
    if max(img.size) > MAX_DIM:
        r2 = MAX_DIM / max(img.size)
        img = img.resize((int(img.size[0]*r2), int(img.size[1]*r2)), Image.LANCZOS)
    if amin >= 250:
        img = remove_bg_conservative(img)
    img.save(out, 'WEBP', quality=90, method=6)
    return True

ok = fail = 0
for slug, url in logos:
    print(f'{slug}...', end=' ', flush=True)
    if process(slug, url):
        s = os.path.getsize(os.path.join(OUTPUT_DIR, f'{slug}.webp'))
        print(f'OK {s:,} B'); ok += 1
    else:
        print('FAIL'); fail += 1
print(f'\nDone: {ok} ok, {fail} fail')
