# MyPatientHUB

A multi-page, static front-end for a healthcare patient portal — login,
dashboard, find-a-doctor, and find-a-clinic pages — built with plain HTML,
CSS, and JavaScript. No frameworks, no build tools, no backend required.

## Description

MyPatientHUB lets a user sign in and land on a dashboard that gives them a
quick overview of clinic and pharmacy promotions, marketplace app usage, and
their personal health index. From there, the sidebar links out to dedicated
pages for finding a doctor and finding a clinic, all sharing the same look
and navigation. Signing in takes you to the dashboard; logging out takes you
back to the login page.

## Pages

### Login (`login.html`)
- Sign-in form (email/phone + password) with basic empty-field validation
- Facebook / Google sign-in buttons, Forgot password, and Sign up (placeholders for now)
- On successful sign-in, redirects to `index.html` (the dashboard)

### Dashboard (`index.html`)
- Sidebar navigation with an active-state highlight and a "Download MyPiHUB
  Mobile App" card at the bottom
- Collapsible sidebar via the hamburger icon (full width ↔ icon-only rail),
  collapses automatically on small screens
- Header with breadcrumb, search box, and settings / notifications / log out
  — Log out redirects to `login.html`
- Cards: Promotion by Clinics, Promotion by Pharmacies, Smart Market Usage by
  app, and a Health Index card
- Footer with copyright and quick links

### Find Doctor (`finddoctor.html`)
- Hero banner (background image `Find Doctor-bg.png`) with a doctor search bar
- "Special Services" accordion cards (Primary Care, Emergency Care, Imaging,
  Urgent Care)
- "Find Doctors By Specialty" accordion grid (Anesthesiology, Dermatology,
  Emergency medicine, Neurology, Consultation, Ophthalmology)

### Find Clinic (`clinic.html`)
- Clinic search/listing page, linked from the sidebar on every page

## File structure

```
├── login.html            login.js/loginstyle.css   → Login page
├── index.html             script.js / styles.css    → Dashboard (shared styles/icons for all pages)
├── finddoctor.html          finddoctor.js/.css       → Find Doctor page
├── clinic.html                clinic.js / clinic.css   → Find Clinic page
├── icons.js                     shared inline SVG icon set, used on every page
├── chartImg.jpg, img.jpg          chart placeholder images used on the dashboard
└── README.md
```

`styles.css` and `icons.js` are shared across all pages; each other page adds
its own small CSS/JS file on top for anything page-specific.

## Getting started

No build tools or dependencies needed.

- **Locally:** download/clone the repo and open `login.html` (or any page)
  directly in a browser.
- **Hosted:** enable GitHub Pages on the repo (Settings → Pages → deploy from
  `main`, root folder) for a shareable live link.

## Customization

- **Colors:** CSS custom properties at the top of `styles.css` under `:root`
  — shared by every page.
- **Dashboard chart images:** update the `src` on each `.chart-img` in `index.html`.
- **Dashboard list data:** edit the `clinics`, `pharmacies`, and `marketApps`
  arrays in `script.js`.
- **Login behavior:** wired up in `loginscript.js` — sign-in redirects on any
  non-empty input, no real authentication yet.

## Known limitations

- No real authentication — the login form only checks that fields aren't empty.
- Facebook, Google, Sign up, and Forgot password buttons are placeholders.
- Dashboard charts are static images, not a live charting library.
