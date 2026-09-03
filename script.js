```javascript
/* =========================================
   AIDEN PACE GRAPHICS
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   THEME
========================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("aiden-theme");

if (savedTheme) {
    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );
} else {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );
    }
}


function updateThemeButton() {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        themeIcon.className = "fa-solid fa-sun";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        themeIcon.className = "fa-solid fa-moon";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark mode"
        );
    }
}


updateThemeButton();


themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );

    localStorage.setItem(
        "aiden-theme",
        newTheme
    );

    updateThemeButton();

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    mobileMenu.querySelectorAll("a");


menuToggle.addEventListener("click", () => {

    const isOpen =
        mobileMenu.classList.toggle("open");

    document.body.classList.toggle(
        "menu-open",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close menu"
            : "Open menu"
    );

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        document.body.classList.remove(
            "menu-open"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header =
    document.getElementById("siteHeader");


function handleHeaderScroll() {

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}


window.addEventListener(
    "scroll",
    handleHeaderScroll
);

handleHeaderScroll();


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".project");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        /* Active button */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        /* Filter projects */

        projects.forEach(project => {

            const category =
                project.dataset.category;

            const shouldShow =
                filter === "all" ||
                category === filter;

            if (shouldShow) {
                project.classList.remove(
                    "is-hidden"
                );
            } else {
                project.classList.add(
                    "is-hidden"
                );
            }

        });

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

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

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav .nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute(
                            "id"
                        );

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute(
                                "href"
                            ) === `#${currentId}`
                        ) {
                            link.classList.add(
                                "active"
                            );
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================
   IMAGE FALLBACK
========================================= */

document.querySelectorAll(
    ".project-image img, .hero-card img"
).forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.style.display = "none";

            image.parentElement.classList.add(
                "image-missing"
            );

        }
    );

});


/* =========================================
   CLOSE MENU WITH ESCAPE
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains("open")
        ) {

            mobileMenu.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "menu-open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);
```
