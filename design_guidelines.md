# Netflix-Inspired Portfolio Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Netflix's interface design, emphasizing cinematic storytelling, dramatic visual hierarchy, and immersive user experience.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: 0 0% 8% (deep charcoal)
- Surface: 0 0% 12% (dark gray)
- Netflix Red: 0 100% 50% 
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (light gray)

### B. Typography
- **Primary Font**: Netflix Sans or Helvetica Neue (bold, medium, regular)
- **Accent Font**: Bebas Neue for dramatic headers
- **Hierarchy**: Large cinematic titles (4xl-6xl), medium section headers (2xl-3xl), readable body text (base-lg)

### C. Layout System
**Tailwind Spacing**: Primary units of 4, 8, 16, 24 for consistent rhythm
- Container max-width: 7xl with px-8 horizontal padding
- Vertical spacing: py-16 for major sections, py-8 for subsections

### D. Component Library

**Hero Section:**
- Full viewport height with dark gradient overlay
- Large cinematic title card with Chandar's name
- Subtitle positioning him as "Senior Software Engineer" protagonist
- Smooth scroll indicator at bottom

**Career Timeline ("Seasons"):**
- Horizontal scrolling timeline with company logos as episode thumbnails
- Hover effects revealing role details in Netflix-style cards
- Progress bar showing career progression

**Skills Showcase:**
- Character trait cards with progress bars styled as loading indicators
- Grid layout with subtle red accent borders
- Hover animations revealing skill descriptions

**Project Gallery:**
- Movie poster style project cards in responsive grid
- Modal overlays with project details on click
- Netflix-style "More Info" buttons with blurred backgrounds on hero images

**Experience Sections:**
- Story arc structure with dramatic headlines
- Achievement highlights as "plot twists"
- Testimonials as "critic reviews"

### E. Interactions
- Smooth scrolling between sections
- Fade-in animations on scroll (subtle, performance-focused)
- Hover states for interactive elements
- Modal overlays for detailed content

## Images
**Hero Image**: Large background image of a modern tech workspace or abstract tech visualization with dark overlay
**Project Thumbnails**: Screenshot mockups styled as movie posters with consistent aspect ratios
**Company Logos**: Clean, monochrome versions for timeline episodes
**Background Elements**: Subtle grid patterns or circuit board textures for visual depth

## Navigation
Fixed header with Netflix-style transparency that becomes solid on scroll, featuring smooth anchor navigation to different "episodes" of his career story.