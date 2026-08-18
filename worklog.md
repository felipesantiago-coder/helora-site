---
Task ID: 1
Agent: color-restyling
Task: Restyle hero, footer, and palette across site to use official brand colors

Work Log:
- Fixed `helora-tan` color token from `#6B6050` to `#A39B82` in both `@theme inline` and `:root` runtime variables in globals.css
- Changed home hero section background from dark gradient (`#141E03` to `#283107`) to flat `#777F5C` sage
- Adjusted canvas water simulation base colors to match the lighter sage background (R: 20->95, G: 30->102, B: 3->68 with adjusted multipliers)
- Softened vignette overlay from `rgba(10,16,3,0.50)` to `rgba(40,49,6,0.25)` for subtlety on lighter background
- Changed hero title accent span from `text-helora-gainsboro/75` to `text-white/60` for better contrast
- Changed hero subtitle from `text-helora-gainsboro/80` to `text-white/70`
- Restyled primary CTA button to `bg-[#283107]` with `hover:bg-[#1a2004]` for strong contrast on sage
- Restyled secondary button to white-based colors (`text-white/80`, `border-white/25`, `hover:border-white/40`, `hover:text-white`)
- Changed institutional hero background from dark gradient to flat `#777F5C`
- Restyled institutional CTA button from glass-morphism (`bg-white/15 backdrop-blur-sm`) to solid `bg-[#283107] hover:bg-[#1a2004]`
- Changed footer gradient from `from-[#141E03] to-[#283107]` to `from-[#777F5C] to-[#283107]`
- Updated footer organic wave SVG fill from `#283107` to `#777F5C` to match new gradient top
- Changed footer top accent line from `via-helora-sage/40` to `via-white/10` for subtlety on lighter background
- Changed header transparent-state booking button from `bg-white/15 backdrop-blur-sm` to `bg-[#283107] hover:bg-[#1a2004]` to match hero buttons
- Verified CTASection.tsx needs no changes (background unaffected by palette updates)
- Ran lint: 0 errors, 1 pre-existing warning

Stage Summary:
- 5 files modified: globals.css, HeroSection.tsx, institucional/page.tsx, Footer.tsx, Header.tsx
- All hero sections now use `#777F5C` sage background instead of dark green gradient
- All hero CTA buttons now use dark green `#283107` for strong contrast on sage
- Footer now transitions from sage `#777F5C` to dark green `#283107`
- `helora-tan` palette token corrected to `#A39B82` across the entire design system
- No text content changed, no accessibility attributes removed, no em dashes added
