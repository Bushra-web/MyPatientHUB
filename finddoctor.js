// =========================================================
// FIND DOCTOR PAGE
// =========================================================

// ============ SIDEBAR COLLAPSE / EXPAND ============
// Same behaviour as the dashboard: the hamburger toggles the sidebar
// between full width (icons + labels) and a slim icon-only rail.
const appEl = document.getElementById("app");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const hamburgerBtn = document.getElementById("hamburgerBtn");

const MOBILE_BREAKPOINT = 640;
const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

function setCollapsed(collapsed) {
  sidebar.classList.toggle("collapsed", collapsed);
  appEl.classList.toggle("sidebar-collapsed", collapsed);
  overlay.classList.toggle("show", isMobile() && !collapsed);
}

hamburgerBtn.addEventListener("click", () => {
  setCollapsed(!sidebar.classList.contains("collapsed"));
});

overlay.addEventListener("click", () => setCollapsed(true));

function applyDefaultForViewport() {
  setCollapsed(isMobile());
}
window.addEventListener("resize", applyDefaultForViewport);
applyDefaultForViewport();

document.querySelectorAll(".sidebar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobile()) setCollapsed(true);
  });
});

// ============ ACCORDIONS ============
// Clicking a service or specialty row opens it and closes the others
// in that same group.
function setupAccordion(itemSelector, headSelector) {
  const items = document.querySelectorAll(itemSelector);

  items.forEach((item) => {
    const head = item.querySelector(headSelector);
    if (!head) return;

    head.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      items.forEach((other) => other.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

setupAccordion(".service-item", ".service-head");
setupAccordion(".specialty-item", ".specialty-head");

// ============ DOCTOR SEARCH ============
// Placeholder handling until the search is connected to real data.
const doctorSearchForm = document.getElementById("doctorSearchForm");
const currentBtn = document.getElementById("currentBtn");

doctorSearchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const query = document.getElementById("doctorQuery").value.trim();
  const zip = document.getElementById("doctorZip").value.trim();

  if (query === "" && zip === "") {
    alert("Please enter a doctor name, speciality, or a zip code.");
  } else {
    alert("Doctor search results will open soon.");
  }
});

// "Current" fills the zip field with the user's current location
currentBtn.addEventListener("click", function () {
  if (!navigator.geolocation) {
    alert("Location is not supported by this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude.toFixed(4);
      const lng = position.coords.longitude.toFixed(4);
      document.getElementById("doctorZip").value = lat + ", " + lng;
    },
    function () {
      alert("Could not get your current location.");
    }
  );
});
