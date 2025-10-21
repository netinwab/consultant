# Design Guidelines: Modern Minimalist Consulting Website

## Design Approach
**Selected Approach:** Reference-Based (inspired by redefinedsocial.com's layout and simplicity)  
**Justification:** The user has explicitly requested inspiration from redefinedsocial.com's minimalist aesthetic while maintaining originality through fresh color palettes and styling.

**Design Principles:**
- Elegance through generous whitespace and restraint
- Trust and professionalism through clean layouts
- Empowerment through clear hierarchy and accessible content

## Core Design Elements

### A. Color Palette
**Primary Options** (choose one direction):
- **Option 1 - Navy & Beige:** Navy 220 70% 25% | Beige 35 25% 85% | Accent Navy 220 60% 15%
- **Option 2 - Dark Green & Cream:** Forest 150 45% 20% | Cream 40 20% 92% | Accent Green 150 40% 30%
- **Option 3 - Charcoal & Gold:** Charcoal 210 10% 20% | Warm White 40 15% 95% | Gold Accent 45 60% 50%

**Dark Mode:** Not required - maintain light, airy aesthetic throughout

### B. Typography
**Font Families (via Google Fonts):**
- **Primary:** Inter or Poppins for headings and body
- **Secondary:** Lora for accent text or testimonials (optional elegance)

**Hierarchy:**
- Hero Headline: 3.5rem - 4rem, font-weight 700
- Section Titles: 2.5rem - 3rem, font-weight 600
- Service Cards: 1.25rem, font-weight 500
- Body Text: 1rem - 1.125rem, font-weight 400

### C. Layout System
**Spacing Primitives:** Tailwind units 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-6 to gap-8 for grids
- Container: max-w-7xl with px-6

### D. Component Library

**Header:**
- Fixed/sticky navigation with logo left, nav center, CTA button right
- Tagline beneath logo: "People. Purpose. Performance."
- Navigation items: Home, About, Services, Portfolio, Blog, Contact
- Bold "Contact Us" button with primary color

**Hero Section:**
- Full-width background image or subtle video
- Centered content with generous vertical padding
- Headline: "Helping Businesses Align People, Processes, and Systems for Sustainable Growth"
- Subtext with supporting message
- Primary CTA: "Work With Us" or "Book a Consultation"

**Services Section:**
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- Image cards with overlay or pill-style buttons
- Services: Business Strategy, Process Optimization, Systems Alignment, Organizational Development, Leadership Training
- "See More" hover interaction on each card

**About Section:**
- Two-column layout (50/50 split on desktop)
- Left: Professional image or visual
- Right: Headline + descriptive text + CTA button
- Mobile: Stack vertically

**Portfolio/Case Studies:**
- Visual cards showcasing client projects
- 2-3 columns with hover effects
- Include metrics or before/after highlights

**Payment/Booking Section:**
- Integrated "Make a Payment" or "Book a Session" prominently in header and footer
- Consider dedicated CTA section mid-page

**Footer:**
- Newsletter signup with elegant form ("Receive insights and updates")
- Contact email and social icons (LinkedIn, Instagram)
- Quick navigation links
- Company tagline and copyright
- Multi-column layout: 3-4 sections

### E. Interactions
**Animations:** Subtle and professional
- Smooth scroll behavior
- Fade-in on scroll for sections
- Card hover elevations (shadow increase)
- Button hover states with gentle transitions
- Service card "See More" reveal on hover

**Avoid:** Heavy gradients, flashy animations, cluttered visuals

## Images
**Required Images:**
1. **Hero Background:** Full-width professional business setting or collaborative team environment - bright, aspirational
2. **About Section:** Authentic team photo or professional portrait - conveys trust
3. **Service Cards:** Abstract professional imagery representing each service (5 images) or use icon + color combinations
4. **Portfolio Cards:** Real project visuals or client success representations (3-6 images)

**Image Treatment:** Soft overlays on hero, clean edges on section images, professional photography aesthetic

## Key Experience Goals
- **Trust:** Clean layouts, professional imagery, consistent branding
- **Collaboration:** Warm color tones, approachable typography, human-centered content
- **Empowerment:** Clear CTAs, accessible information hierarchy, confident messaging

**Mobile Responsive:** All sections stack gracefully, touch-friendly buttons, readable text sizes