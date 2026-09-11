// ============ COLOR TOKENS (used for the small legend icon badges) ============
const COLORS = {
  navy: "#1e2749",
  pink: "#ec1876",
  green: "#3fc380",
  yellow: "#f6b93b",
  blue: "#3f7cf6",
  silver: "#c4cbdb",
};

// ============ LEGEND RENDER HELPER ============
function renderLegend(listId, items) {
  const list = document.getElementById(listId);
  list.innerHTML = items
    .map(
      (item) => `
      <li>
        <span class="legend-icon" style="background:${item.color}" data-icon="${item.icon}"></span>
        <span class="legend-name">${item.name}</span>
        <span class="legend-pct">${item.pct}%</span>
      </li>`
    )
    .join("");
  renderIcons(list);
}

// ============ DATA ============
const clinics = [
  { name: "Klinik Lee Healthcare", pct: 19, color: COLORS.pink, icon: "flower" },
  { name: "Klinik Bandar Baru Nilai", pct: 4, color: COLORS.blue, icon: "triangle" },
  { name: "Klinik Mediviron Giant Nilai", pct: 10, color: COLORS.navy, icon: "shield" },
  { name: "KLINIK NILAI IMPIAN", pct: 21, color: COLORS.green, icon: "leaf" },
  { name: "Klinik Mediviron", pct: 2, color: COLORS.blue, icon: "diamond" },
];

const pharmacies = [
  { name: "ALPRO PHARMACY NILAI", pct: 15, color: COLORS.pink, icon: "flower" },
  { name: "ALPRO PHARMACY PEKAN NILAI", pct: 12, color: COLORS.blue, icon: "triangle" },
  { name: "OK PHARMACY", pct: 5, color: COLORS.navy, icon: "shield" },
  { name: "PHARMART PHARMACY NILAI", pct: 9, color: COLORS.green, icon: "leaf" },
  { name: "Health Lane Family Pharmacy", pct: 14, color: COLORS.blue, icon: "diamond" },
];

const marketApps = [
  { name: "Food Panda", pct: 25, color: COLORS.pink, icon: "flower" },
  { name: "Grab Food", pct: 13, color: COLORS.blue, icon: "triangle" },
  { name: "Lazada", pct: 40, color: COLORS.navy, icon: "shield" },
  { name: "Shopee", pct: 22, color: COLORS.silver, icon: "leaf" },
];

// ============ RENDER LISTS ============
renderLegend("clinicsLegend", clinics);
renderLegend("pharmaciesLegend", pharmacies);
renderLegend("marketLegend", marketApps);

// ============ SIDEBAR COLLAPSE / EXPAND ============
// Clicking the hamburger toggles the sidebar between its full state
// (icons + labels, matches the screenshot) and a slim icon-only state.
// The sidebar itself is never fully hidden.
const appEl = document.getElementById("app");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const hamburgerBtn = document.getElementById("hamburgerBtn");

const MOBILE_BREAKPOINT = 640;
const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

function setCollapsed(collapsed) {
  sidebar.classList.toggle("collapsed", collapsed);
  appEl.classList.toggle("sidebar-collapsed", collapsed);
  // on mobile, an expanded sidebar floats over the content, so dim
  // the background and let a tap outside collapse it again
  overlay.classList.toggle("show", isMobile() && !collapsed);
}

hamburgerBtn.addEventListener("click", () => {
  const collapsedNow = sidebar.classList.contains("collapsed");
  setCollapsed(!collapsedNow);
});

overlay.addEventListener("click", () => setCollapsed(true));

// collapse to icons only by default on small screens, full sidebar on desktop
function applyDefaultForViewport() {
  setCollapsed(isMobile());
}
window.addEventListener("resize", applyDefaultForViewport);
applyDefaultForViewport();

// tapping a nav link on mobile collapses the drawer back to icons
document.querySelectorAll(".sidebar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobile()) setCollapsed(true);
  });
});
