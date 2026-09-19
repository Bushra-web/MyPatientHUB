// ============================================
// FIND CLINIC PAGE JAVASCRIPT
// ============================================


// ============================================
// SIDEBAR
// ============================================

const appEl = document.getElementById("app");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const hamburgerBtn = document.getElementById("hamburgerBtn");

const MOBILE_BREAKPOINT = 640;

const isMobile = () => {
    return window.innerWidth <= MOBILE_BREAKPOINT;
};


function setCollapsed(collapsed) {

    sidebar.classList.toggle(
        "collapsed",
        collapsed
    );

    appEl.classList.toggle(
        "sidebar-collapsed",
        collapsed
    );

    overlay.classList.toggle(
        "show",
        isMobile() && !collapsed
    );
}


hamburgerBtn.addEventListener(
    "click",
    () => {

        const collapsedNow =
            sidebar.classList.contains("collapsed");

        setCollapsed(!collapsedNow);

    }
);


overlay.addEventListener(
    "click",
    () => {

        setCollapsed(true);

    }
);


function applyDefaultForViewport() {

    setCollapsed(isMobile());

}


window.addEventListener(
    "resize",
    applyDefaultForViewport
);


applyDefaultForViewport();


// ============================================
// MOBILE SIDEBAR NAVIGATION
// ============================================

document
    .querySelectorAll(".sidebar-nav a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (isMobile()) {
                    setCollapsed(true);
                }

            }
        );

    });


// ============================================
// HERO SEARCH
// ============================================

const heroSearch =
    document.getElementById("heroClinicSearch");

const heroLocation =
    document.getElementById("heroLocationSearch");

const heroSearchBtn =
    document.getElementById("heroSearchBtn");


heroSearchBtn.addEventListener(
    "click",
    () => {

        const clinic =
            heroSearch.value.trim();

        const location =
            heroLocation.value.trim();


        if (clinic === "" && location === "") {

            alert(
                "Please enter a clinic or location."
            );

            return;
        }


        console.log(
            "Clinic:",
            clinic
        );

        console.log(
            "Location:",
            location
        );

    }
);


// ============================================
// CURRENT LOCATION BUTTON
// ============================================

const currentBtn =
    document.getElementById("currentBtn");


currentBtn.addEventListener(
    "click",
    () => {

        if (!navigator.geolocation) {

            alert(
                "Location is not supported by your browser."
            );

            return;
        }


        currentBtn.textContent =
            "LOCATING...";


        navigator.geolocation.getCurrentPosition(

            function(position) {

                console.log(
                    "Latitude:",
                    position.coords.latitude
                );

                console.log(
                    "Longitude:",
                    position.coords.longitude
                );


                currentBtn.textContent =
                    "CURRENT";

            },


            function() {

                alert(
                    "Could not get your current location."
                );


                currentBtn.textContent =
                    "CURRENT";

            }

        );

    }
);


// ============================================
// MAP / LIST BUTTONS
// ============================================

const mapViewBtn =
    document.getElementById("mapViewBtn");

const listViewBtn =
    document.getElementById("listViewBtn");


mapViewBtn.addEventListener(
    "click",
    () => {

        mapViewBtn.classList.add("active");

        listViewBtn.classList.remove("active");

    }
);


listViewBtn.addEventListener(
    "click",
    () => {

        listViewBtn.classList.add("active");

        mapViewBtn.classList.remove("active");

        alert(
            "List view is ready for the clinic list."
        );

    }
);