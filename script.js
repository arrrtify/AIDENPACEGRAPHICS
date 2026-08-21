/* ==========================================
   AIDEN PACE GRAPHICS
   JAVASCRIPT
========================================== */


/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("aidenpace-theme");

const systemDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;


/*
   Priority:

   1. User's saved preference
   2. Device preference
   3. Light mode
*/

if (
    savedTheme === "dark" ||
    (!savedTheme && systemDark)
) {

    document.body.classList.add("dark");

}


function updateThemeIcon() {

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.className = "fa-solid fa-sun";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        icon.className = "fa-solid fa-moon";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


updateThemeIcon();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "aidenpace-theme",
        dark ? "dark" : "light"
    );

    updateThemeIcon();

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.className = "fa-solid fa-xmark";

    } else {

        icon.className = "fa-solid fa-bars";

    }

});


/*
   Close mobile menu
   when a navigation link
   is clicked.
*/

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle
                .querySelector("i")
                .className =
                "fa-solid fa-bars";

        });

    });


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   SYSTEM THEME CHANGES
========================================== */

if (window.matchMedia) {

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", event => {

            /*
               Only follow the system if
               the user hasn't manually chosen
               a theme.
            */

            if (
                !localStorage.getItem(
                    "aidenpace-theme"
                )
            ) {

                if (event.matches) {

                    document.body
                        .classList
                        .add("dark");

                } else {

                    document.body
                        .classList
                        .remove("dark");

                }

                updateThemeIcon();

            }

        });

}


/* ==========================================
   SIMPLE SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".service-card, .portfolio-item, .why-card, .contact-row"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});