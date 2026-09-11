# MyPatientHUB Dashboard

A static, front-end recreation of the MyPatientHUB patient dashboard — a healthcare
platform UI with a collapsible sidebar, top navigation bar, promotion/usage
summary cards, and a health index widget. Built with plain HTML, CSS, and
JavaScript (no build step, no framework).

## Description

MyPatientHUB Dashboard is a responsive admin-style landing page for a patient
portal. It gives users a quick overview of clinic and pharmacy promotions,
marketplace app usage, and a personal health index, all accessible from a
persistent sidebar covering appointments, doctors, clinics, chat, marketplace,
pharmacy, dependents, account, and settings. The layout is self-contained —
open `index.html` in a browser and everything renders, no server or
dependencies required.

## Features

- **Sidebar navigation** — 10 nav items with inline SVG icons, an active-state
  highlight (gradient icon badge on the current page), and a gradient help button.
- **Collapsible sidebar** — the hamburger icon in the header toggles the sidebar
  between full width (icons + labels) and a slim icon-only rail. Sidebar starts
  collapsed automatically on small screens and opens as an overlay drawer.
- **Header** — breadcrumb, page title, search box, and log out / settings /
  notification icon buttons.
- **Dashboard cards** — "Promotion by Clinics," "Promotion by Pharmacies," and
  "Smart Market Usage by app," each with a chart image and a scrollable legend
  list (name + percentage) built dynamically from data arrays in `script.js`.
- **Health Index card** — headline percentage/delta stat with its own chart image.
- **Footer** — copyright line and quick links, styled to match the rest of the UI.
- **Fully responsive** — adapts down to tablet and mobile widths; cards stack,
  the sidebar collapses, and the header wraps as needed.

## File structure

```
dashboard/
├── index.html      # Page markup: sidebar, header, cards, footer
├── styles.css       # All styling, layout, color tokens, and responsive rules
├── script.js        # Legend data + rendering, sidebar collapse/expand logic
├── icons.js         # Inline SVG icon set, injected via [data-icon] attributes
└── README.md        # This file
```

## Getting started

No build tools or dependencies are needed.

1. Download/copy the four files above into one folder.
2. Open `index.html` directly in a browser, or serve the folder locally:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```

## Customization

- **Colors** — all brand colors (pink, purple, navy, etc.) are defined as CSS
  custom properties at the top of `styles.css` under `:root`. Change them once
  and they apply everywhere.
- **Chart images** — the donut/line charts are `<img>` placeholders. Update the
  `src` on each `.chart-img` in `index.html` to point to your own chart image
  (relative to `index.html`, e.g. `images/clinics-chart.png`).
- **Sidebar/legend data** — nav items live directly in `index.html`; the card
  legend lists (clinic/pharmacy/app names, percentages, icon, color) are data
  arrays (`clinics`, `pharmacies`, `marketApps`) at the top of `script.js` —
  edit those arrays to change what's shown, no HTML editing required.
- **Breakpoints** — responsive rules are grouped at the bottom of `styles.css`
  (`1080px`, `640px`, `560px`) if you need to adjust when the layout stacks or
  the sidebar collapses.

## Notes

- Chart areas currently use static images rather than a live charting library —
  swap in real chart images or wire up a library (e.g. Chart.js) if dynamic
  data visualization is needed.
- All data in `script.js` is sample/placeholder content for layout purposes.
