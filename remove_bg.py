#!/usr/bin/env python3
"""
Remove background from all logo WebP files.
Detects background color from corner pixels and makes matching pixels transparent.
"""

import os
import numpy as np
from PIL import Image

LOGO_DIR = '/home/z/helora-site/public/convenios'
THRESHOLD = 30  # color distance tolerance for background matching

def remove_background(img: Image.Image) -> Image.Image:
    """Remove solid background from an image."""
    img = img.convert('RGBA')
    arr = np.array(img, dtype=np.float32)
    alpha = arr[:, :, 3]
    rgb = arr[:, :, :3]
    
    # Sample corner pixels (5x5 region) to detect background color
    corners = []
    h, w = arr.shape[:2]
    sample = 5
    for y, x in [(0, 0), (0, w-sample), (h-sample, 0), (h-sample, w-sample)]:
        region = rgb[y:y+sample, x:x+sample]
        corners.append(region.reshape(-1, 3))
    
    all_corners = np.vstack(corners)  # (100, 3)
    
    # Find the most common color cluster (simple: use median of corner pixels)
    bg_color = np.median(all_corners, axis=0)  # (3,)
    
    # Calculate Euclidean distance from each pixel to background color
    diff = rgb - bg_color  # (H, W, 3)
    dist = np.sqrt(np.sum(diff ** 2, axis=2))  # (H, W)
    
    # Create mask: pixels close to background color
    bg_mask = dist < THRESHOLD
    
    # Also handle fully opaque pixels that are very light (near white)
    # This catches light gray backgrounds
    brightness = np.mean(rgb, axis=2)
    light_mask = brightness > (255 - THRESHOLD)
    combined_mask = bg_mask | (light_mask & (dist < THRESHOLD * 2))
    
    # Apply: make background pixels fully transparent
    new_alpha = alpha.copy()
    new_alpha[combined_mask] = 0
    
    # Smooth edges: for pixels near the mask boundary, apply partial transparency
    from scipy import ndimage
    # Dilate the mask slightly and create edge region
    dilated = ndimage.binary_dilation(combined_mask, iterations=2)
    edge = dilated & ~combined_mask
    # For edge pixels, set alpha based on distance to background
    if np.any(edge):
        edge_dist = dist[edge]
        # Normalize: pixels at THRESHOLD distance get 0 alpha, at THRESHOLD*2 get full alpha
        edge_alpha = np.clip((edge_dist - THRESHOLD) / THRESHOLD, 0, 1) * 255
        new_alpha[edge] = edge_alpha.astype(np.uint8)
    
    arr[:, :, 3] = new_alpha
    return Image.fromarray(arr.astype(np.uint8), 'RGBA')


results = []
failed = []

for fname in sorted(os.listdir(LOGO_DIR)):
    if not fname.endswith('.webp'):
        continue
    
    fpath = os.path.join(LOGO_DIR, fname)
    try:
        img = Image.open(fpath)
        img.load()
        
        w, h = img.size
        orig_size = os.path.getsize(fpath)
        
        # Check if already has transparency
        if img.mode == 'RGBA' and img.split()[-1].getextrema()[0] < 255:
            # Already has some transparency, still process to clean up
            pass
        
        result = remove_background(img)
        
        # Check if anything changed
        orig_alpha = img.convert('RGBA').split()[-1]
        new_alpha = result.split()[-1]
        changed_pixels = np.sum(np.array(orig_alpha) != np.array(new_alpha))
        
        result.save(fpath, 'WEBP', quality=88, method=6)
        new_size = os.path.getsize(fpath)
        
        pct = (changed_pixels / (w * h)) * 100
        print(f'  {fname:<30s} {w:>4}x{h:<4} {orig_size:>6} -> {new_size:>6} B  bg_removed: {pct:.0f}%')
        results.append(fname)
    except Exception as e:
        print(f'  {fname:<30s} FAIL: {e}')
        failed.append((fname, str(e)))

print(f'\nProcessed: {len(results)}/{len(results)+len(failed)}')
if failed:
    print(f'Failed: {failed}')
