# MyPatientHUB

A two-page, static front-end for a healthcare patient portal: a login page
and a dashboard, built with plain HTML, CSS, and JavaScript — no frameworks,
no build tools, no backend required.

## Description

MyPatientHUB lets a user sign in and land on a dashboard that gives them a
quick overview of clinic and pharmacy promotions, marketplace app usage, and
their personal health index — all navigable through a clean, collapsible
sidebar. The two pages are linked together: signing in takes you to the
dashboard, and logging out takes you back to the login page.

## Pages

### Login (`login.html`)
- Sign-in form (email/phone + password) with basic empty-field validation
- Facebook / Google sign-in buttons (placeholders for now)
- Forgot password and Sign up buttons (placeholders for now)
- On successful sign-in, redirects to `index.html` (the dashboard)

### Dashboard (`index.html`)
- Sidebar navigation (Dashboard, Appointments, Find Doctor, Find Clinic,
  Chat, Find MarketPlace, Find Pharmacy, My Dependents, My Account, Settings)
  with an active-state highlight and a help button
- Collapsible sidebar — the hamburger icon toggles between full width
  (icons + labels) and a slim icon-only rail; it collapses automatically on
  small screens
- Header with breadcrumb, search box, and settings / notifications / log out
  icons — Log out redirects to `login.html`
- Cards: Promotion by Clinics, Promotion by Pharmacies, Smart Market Usage by
  app (chart image + legend list built from data in `script.js`), and a
  Health Index card
- Footer with copyright and quick links
- Fully responsive down to mobile widths

## File structure

```
├── login.html          # Login page markup
├── loginstyle.css       # Login page styling
├── loginscript.js       # Login form logic + redirect to dashboard
│
├── index.html           # Dashboard page markup
├── styles.css            # Dashboard styling, color tokens, responsive rules
├── script.js              # Dashboard legend data + sidebar collapse logic
├── icons.js                # Inline SVG icon set, injected via [data-icon]
├── chartImg.jpg / img.jpg   # Chart placeholder image(s) used on the dashboard
│
└── README.md
```

> **Note:** the repo may still contain an older, unused login attempt
> (`index1.html`, `style1.css`, `script1.js`). `login.html` /
> `loginstyle.css` / `loginscript.js` are the current versions — the older
> trio can be safely deleted once you've confirmed nothing links to it.

## Getting started

No build tools or dependencies needed.

- **Locally:** download/clone the repo and open `login.html` (or `index.html`)
  directly in a browser.
- **Hosted:** enable GitHub Pages on the repo (Settings → Pages → deploy from
  `main`, root folder) for a shareable live link.

## Customization

- **Colors:** CSS custom properties at the top of `styles.css` under `:root`.
- **Chart images:** update the `src` on each `.chart-img` in `index.html`.
- **List data:** edit the `clinics`, `pharmacies`, and `marketApps` arrays in
  `script.js`.
- **Login behavior:** sign-in/sign-up/social buttons are wired up in
  `loginscript.js` — currently sign-in redirects on any non-empty input, with
  no real authentication yet.

## Known limitations

- No real authentication — the login form only checks that fields aren't empty.
- Facebook, Google, Sign up, and Forgot password buttons are placeholders.
- Dashboard charts are static images, not a live charting library.
- Data shown on the dashboard cards is sample/placeholder content.
