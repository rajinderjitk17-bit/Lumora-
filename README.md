# LUMORA®
### *"Find the moments worth remembering."*

An independent, editorial-grade digital travel journal and cultural ticketing bureau for discovering real-world concerts, hidden workshops, intimate communal dinners, spatial art exhibitions, and nocturnal city walks.

Designed and engineered for college showcase presentations and design juries.

---

## 1. Design Identity: "The Digital Travel Journal"

Rather than a generic SaaS dark mode, neon gradients, or standard ticketing cards, **LUMORA** was conceived as a physical travel journal and independent culture magazine transformed into a responsive 2026 digital interface:

- **Warm Paper Canvas (`#F4F0E6`)**: Tactile paper tone accented with organic noise overlay.
- **Deep Ink (`#151515`)**: High-contrast, publication-grade editorial typography.
- **Electric Cobalt (`#2448FF`)**: Primary accent for technical stamps, primary buttons, and navigational active indicators.
- **Acid Lime (`#C7F36B`)**: Secondary accent for telemetry pips, admit-one stubs, and live indicator tags.
- **Burnt Orange (`#E86A33`)**: Secondary accent for rubber-stamp seals, bookmarks, and urgent scarcity signals.
- **Perforated Ticket Architecture**: Custom ticket edges with tear lines, radial cutouts, barcode glyphs, and rotation angles (±1–2°).
- **Cartographic Coordinates**: Explicit geographic coordinates (e.g., `30.7333° N / 76.7794° E`) framing every venue and city.

---

## 2. Typography

Loaded via Google Fonts:
1. **Display & Headings**: `DM Serif Display` — Literary, high-contrast serif with italic accents.
2. **UI & Body**: `Manrope` — Contemporary geometric grotesque for reading ease and UI states.
3. **Technical & Metadata**: `Space Mono` — Monospaced technical labels, coordinates, serials, and timestamps.

---

## 3. Technology Stack & Constraints

- **HTML5**: Pure semantic HTML structure (no frameworks).
- **CSS3**: Custom properties, CSS Grid, Flexbox, custom form controls, animations, and media queries down to 375px.
- **Vanilla JavaScript**: Zero dependencies (no React, Vue, Angular, jQuery, Bootstrap, or Tailwind).
  - Multi-filter engine (search, city, category, date, price, mood, sorting).
  - Sticky header transformation and scroll spy.
  - Interactive sensory mood preview system.
  - Interactive SVG-inspired cartography map.
  - Horizontal weekend ticket rail with day filters.
  - 4-step modal booking flow with real-time order summary calculation.
  - Digital Passport ledger with dynamic rubber-stamp generation & `localStorage` persistence.
  - `IntersectionObserver` animated number counters.
  - 9-frame editorial photography lightbox with keyboard navigation.
  - Bookmarks drawer with live badge counts and localStorage persistence.
  - Toast notification engine.

---

## 4. Key Showcase Features

1. **Editorial Magazine Cover Hero**: Asymmetrical layout, oversized typography, live telemetry status, and layered ticket-stub badge.
2. **"This Weekend" Ticket Rail**: Horizontal scroll rail with tilted tickets that straighten on hover.
3. **Sensory Mood Index**: Real-time cursor hover image previews and direct filter linkage.
4. **City Cartography Explorer**: Interactive map coordinates for Chandigarh, Delhi, Mumbai, Bangalore, Jaipur, and Amritsar.
5. **The Archive (Smart Discovery)**: Live multi-criteria filter engine with live count and pill removal.
6. **My Lumora Passport**: Digital citizen passport collecting travel stamps with custom ink angles, date stamps, and attendee name personalization.
7. **Simulated Multi-Step Checkout**: Tier selection (General, Premium, VIP), citizen info, real-time fee calculation, and boarding pass generation with QR code.
8. **Field Gallery Lightbox**: Magnified inspection with caption bar and photographer credits.

---

## 5. File Structure

```
lumora/
├── index.html       # Semantic single-page application structure & modals
├── style.css        # Pure CSS design system & responsive rules
├── script.js        # Vanilla JS logic, data ledger, & micro-interactions
└── README.md        # Project documentation & presentation guide
```

---

## 6. How to Run

Simply open `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge). No build step, node modules, or bundler required.
