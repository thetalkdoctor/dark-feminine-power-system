# Dark Feminine Power System Landing Page - Design Guidelines

## Design Approach
**Reference-Based:** Inspired by premium wellness/transformation brands with dark, elegant aesthetics. Think high-end spiritual/personal development platforms with sophisticated, feminine energy.

## Color Palette

### Backgrounds
- Primary: `#04020A` (deep black with subtle purple undertones)
- Secondary: `#070413` (slightly lighter dark for section contrast)
- Hero Gradient: `#04020A` → `#120519`
- Purple Gradient: `#120519` → `#4E1C6E`

### Text
- Main: `#F4E8FF` (soft lilac off-white)
- Muted: `#B9AFCF` (subdued purple-gray)
- Strong: `#FFFFFF` (use sparingly for emphasis only)

### Accents
- Magenta: `#C72E8F` (primary brand accent)
- Purple: `#4E1C6E`
- Gold: `#E9B35A`

### Buttons
- Primary: Gradient from `#C72E8F` to `#E9B35A`
- Secondary: Transparent with 1px `#C72E8F` border

## Typography

### Font Families
- **Headings:** Playfair Display or Cormorant Garamond (Google Fonts)
- **Body:** Inter or Poppins

### Sizing (Desktop)
- H1: `clamp(2.4rem, 4vw, 3.5rem)`
- H2: `clamp(1.8rem, 3vw, 2.4rem)`
- H3: `1.4rem–1.6rem`
- Body: `1rem` (line-height: 1.6–1.8)
- Buttons: `0.85–0.95rem`, uppercase, letter-spacing: `0.08em`

### Sizing (Mobile)
- H1: ~2rem
- H2: ~1.5rem

## Layout System

### Container
- Max width: 1200px (centered)
- Horizontal padding: 40px (desktop), 32px (tablet), 20px (mobile)
- Vertical section spacing: 96px min (desktop), 64px min (mobile)

### Spacing Units
Use Tailwind's spacing scale, primarily: 2, 4, 5, 6, 8, 10, 12, 16, 20, 24 units

## Section Breakdown

### 1. Navbar (Sticky)
- Height: 72px (desktop), 64px (mobile)
- Initially transparent over hero
- On scroll: Add `rgba(4,2,10,0.9)` background + 12px backdrop blur
- Left: "Dark Feminine Power System™" logo text
- Right: Inline links (What's Inside, Who It's For, FAQ) + "Get Access" button
- Mobile: Hamburger → full-screen overlay menu

### 2. Hero Section
- Min-height: 100vh (desktop), 90vh (mobile)
- **Layout:** Two-column (desktop) - Left: text/CTAs, Right: bundle mockup
- **Background:** Full gradient with 2-3 blurred "orbs" (magenta, purple, gold) + subtle noise overlay
- **Text Content:**
  - Small label: "A Complete Dark Feminine Transformation Bundle" (magenta, uppercase)
  - H1: "Become the Woman They Don't Forget." (emphasize "Don't Forget" in gold/gradient)
  - H2: "Stop shrinking. Start walking through life like you own the room."
  - 4 bullet benefits with subtle icons
- **CTAs:**
  - Primary: "Unlock My Dark Feminine Power" (gradient pill button with glow)
  - Subtext: "Instant access · All 5 tools · Start in minutes"
  - Secondary: "Show Me What's Inside First" (ghost link with arrow)
- **Mockup:** 3D stacked graphic showing eBook cover + 2 offset cards + smartphone, with floating animation

### 3. Emotional Hook Section
- Background: `#070413` with subtle geometric pattern
- Title: "You'll Feel This In Your Bones If…"
- **Layout:** 2-row grid of 3-4 cards (stack on mobile)
- **Card Style:** Rounded rectangles, subtle background, magenta border on hover
- Example texts: "You're tired of being the 'nice girl'...", "You've been called 'too much'..."
- Hover effect: Lift, border glow, inner glow

### 4. Before/After Transformation
- Background: Gradient `#070413` → `#120519`
- Title: "This Isn't Just Information. It's a Full Identity Upgrade."
- **Layout:** Two-column comparison table
- **Before Card:** Neutral styling, muted red title, problems listed
- **After Card:** Soft magenta tint background, magenta border, solutions listed
- Slide-in animations from left/right

### 5. Bundle Breakdown
- Background: `#04020A`
- Title: "Everything You Need To Unlock Your Dark Feminine Power — In One Place."
- **Layout:** Grid of 5 cards (3 top, 2 bottom centered on desktop; stacked mobile)
- **Card Elements:** Cover image/icon, title (H3), 1-2 sentence description, "Value: $XX" in gold
- 5 Products: Ebook, Archetypes Guide, Psychological Weapons, Shadow Integration, Audio Course

## Animation Principles
- **Philosophy:** Subtle, smooth, controlled (never chaotic)
- **Default transition:** Opacity 0→1, translateY(20px→0), 0.5-0.7s duration, easeOut
- **Stagger:** 0.08-0.12s between items
- **Continuous:** Mockup floating (6px translateY, 5-6s yoyo), slow orb movement
- **Scroll triggers:** Fade + rise on viewport entry

## Images
**Hero Mockup:** Create 3D bundle visualization showing stacked digital products (eBook cover prominent, offset cards, smartphone). Should feel premium and dimensional with subtle reflections.

## Special Effects
- Gradient text on key phrases
- Soft colored shadows on primary buttons (magenta/purple glow)
- Backdrop blur on scrolled navbar
- Noise texture overlay on dark backgrounds
- Radial gradient orbs for depth