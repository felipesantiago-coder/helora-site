#!/usr/bin/env python3
"""
Extract logos from base64 data URIs in convenios.ts,
upscale 3x with Lanczos resampling, and save as optimized WebP.
"""

import re
import base64
import os
import json
from PIL import Image
import io

INPUT_FILE = '/home/z/helora-site/src/data/convenios.ts'
OUTPUT_DIR = '/home/z/helora-site/public/convenios'
SCALE = 3  # 3x upscale for crisp retina display
WEBP_QUALITY = 85

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Read the file
with open(INPUT_FILE, 'r') as f:
    content = f.read()

# Find all entries: { name: 'XXX', src: 'data:image/svg+xml;base64,YYY' }
pattern = r"name: '([^']+)',\s*src: '(data:image/svg\+xml;base64,[^']+)'"
entries = re.findall(pattern, content)

# Also find entries with null src
null_pattern = r"name: '([^']+)',\s*src: null"
null_entries = re.findall(null_pattern, content)

print(f"Found {len(entries)} logo entries with images")
print(f"Found {len(null_entries)} entries with null src")

results = []
failed = []

for name, data_uri in entries:
    slug = name.lower().replace(' ', '-').replace('/', '-').replace('----', '-').strip('-')
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.webp")
    
    try:
        # Extract base64 from data URI
        svg_b64 = data_uri.replace('data:image/svg+xml;base64,', '')
        svg_xml = base64.b64decode(svg_b64).decode('utf-8', errors='replace')
        
        # Extract the PNG base64 from inside the SVG
        png_match = re.search(r'data:image/(png|jpeg);base64,([A-Za-z0-9+/=]+)', svg_xml)
        if not png_match:
            print(f"  SKIP {name}: No embedded image found in SVG")
            failed.append(name)
            results.append({'name': name, 'slug': slug, 'status': 'failed', 'reason': 'no_embedded_image'})
            continue
        
        png_b64 = png_match.group(2)
        png_data = base64.b64decode(png_b64)
        
        # Open with Pillow
        img = Image.open(io.BytesIO(png_data))
        original_size = img.size
        
        # Convert to RGBA for transparency support
        if img.mode != 'RGBA':
            if img.mode == 'P':
                img = img.convert('RGBA')
            else:
                img = img.convert('RGBA')
        
        # Calculate new size (3x)
        new_w = int(original_size[0] * SCALE)
        new_h = int(original_size[1] * SCALE)
        
        # Upscale with high-quality Lanczos resampling
        img_resized = img.resize((new_w, new_h), Image.LANCZOS)
        
        # Save as WebP
        img_resized.save(output_path, 'WEBP', quality=WEBP_QUALITY, method=6)
        
        file_size = os.path.getsize(output_path)
        
        print(f"  OK {name}: {original_size[0]}x{original_size[1]} -> {new_w}x{new_h} | {file_size:,} bytes")
        results.append({
            'name': name,
            'slug': slug,
            'status': 'ok',
            'original_size': list(original_size),
            'new_size': [new_w, new_h],
            'file_size': file_size
        })
        
    except Exception as e:
        print(f"  ERROR {name}: {e}")
        failed.append(name)
        results.append({'name': name, 'slug': slug, 'status': 'error', 'reason': str(e)})

print(f"\n{'='*60}")
print(f"Processed: {len([r for r in results if r['status'] == 'ok'])}/{len(entries)}")
print(f"Failed: {len(failed)}")

# Calculate total size
total_size = sum(os.path.getsize(os.path.join(OUTPUT_DIR, f)) for f in os.listdir(OUTPUT_DIR) if f.endswith('.webp'))
print(f"Total WebP size: {total_size:,} bytes ({total_size/1024:.1f} KB)")

# Save results for reference
with open('/home/z/my-project/convenios-results.json', 'w') as f:
    json.dump(results, f, indent=2)

print(f"\nNull src entries: {null_entries}")
