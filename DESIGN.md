# Design Brief: Team Apex Gaming

## Tone & Purpose
Premium esports showcase site for competitive gaming team. Visual language combines futuristic minimalism with aggressive orange accents. Purpose: impress, inspire dominance, communicate precision and professionalism.

## Visual Direction
Futuristic minimalism with tech-forward precision. Dark gaming aesthetic with sharp edges and minimal radius. Orange accent used sparingly for hierarchy and CTAs. Glassmorphism on cards for depth without clutter.

## Color Palette

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| background | 0.08 0 0 | #0b0b0b | Page background, near-black |
| foreground | 0.95 0 0 | #f2f2f2 | Primary text |
| card | 0.14 0 0 | #1a1a1a | Card backgrounds with glass effect |
| muted | 0.25 0 0 | #3d3d3d | Secondary surfaces, disabled states |
| accent | 0.65 0.28 35 | #ff6a00 | Primary CTA, highlights, hover states |
| border | 0.22 0 0 | #383838 | Dividers, card edges |
| destructive | 0.55 0.22 25 | #e74c3c | Error, warning, destructive actions |

## Typography

| Role | Font | Weights | Sizes | Usage |
|------|------|---------|-------|-------|
| Display | Space Grotesk | 700 | 2.5rem–4rem | Headings, hero text, brand |
| Body | Plus Jakarta Sans | 400–600 | 0.875rem–1.125rem | Copy, navigation, body |
| Mono | JetBrains Mono | 400 | 0.75rem–0.875rem | Code, details, timestamps |

## Elevation & Depth

| Layer | Background | Border | Shadow |
|-------|-----------|--------|--------|
| Flat | bg-background | border-border/10 | none |
| Overlay | bg-card/80 with blur | border-border/30 | glow-sm |
| Elevated | bg-card | border-border/20 | elevation-1 |
| High | bg-card | border-accent/40 | glow-md + elevation-2 |

## Structural Zones

| Zone | Background | Border | Detail |
|------|-----------|--------|--------|
| Header | bg-card | border-b border-border | Navbar with orange accent on active |
| Hero | bg-background + overlay | none | Full-bleed image, orange glow text |
| Content Sections | bg-background, alternating bg-muted/20 | none | Breathing room, card stack |
| Footer | bg-muted/20 | border-t border-border | Minimal accent, social links |

## Spacing & Rhythm

- **Density**: Tight—1rem gaps within cards, 2rem between sections
- **Padding**: Cards 1.5rem, sections 2rem horizontal, 3rem vertical
- **Typography scale**: 12px, 14px, 16px, 18px, 20px, 24px, 32px, 40px, 48px

## Component Patterns

- **Cards**: `.glass-card` class for semi-transparent with blur and subtle border
- **Buttons**: Accent background, scale + glow on hover, rounded-sm (sharp)
- **Navigation**: Orange underline for active state, smooth transition
- **Player cards**: Glass effect with image overlay, name + role centered, orange on hover
- **Match results**: Clean layout—team names left/right, score center, win/loss badge top-right with accent color
- **Form inputs**: Dark background, accent border on focus, no shadow

## Motion & Animation

- **Entrance**: `animate-fade-in` on page load (0.5s), `animate-slide-up` for section reveals (0.6s staggered)
- **Hover**: `hover:scale-105 transition-smooth` on interactive cards, glow-sm shadow appears
- **Interactive**: Buttons pulse orange accent with `animate-pulse-glow` (optional)
- **Scroll**: Subtle fade-in reveal on intersecting elements

## Signature Detail

Orange glow text on hero heading using CSS `text-shadow` with two-layer orange gradient—outer halo at 60% opacity, inner halo at 30%. Creates premium, futuristic feel without being garish. Accent used ONLY on CTAs, active navigation, and hero text.

## Constraints

- No purple/blue gradients—orange + dark only
- No full-width backgrounds except hero
- No colored text beyond accent orange; stick to foreground palette
- All interactive elements must show scale + glow on hover
- Minimum tap target: 44px (mobile)
- All text must hit WCAG AA contrast (L difference ≥0.7)

## Differentiation

Unlike generic esports sites, this design commits fully to minimalism with aggressive orange. No competing colors, no chat widgets, no floating gradients. The glow effect on hero and card hovers is the signature motion. Sharp borders (0.375rem radius) reinforce tech precision. Player cards and match results emphasize data clarity over decoration.
