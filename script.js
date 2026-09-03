/* ================================
   AIDEN PACE GRAPHICS
   MAIN JAVASCRIPT
================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       THEME
    ================================= */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    function updateThemeIcon() {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        if (currentTheme === "dark") {
            themeIcon.textContent = "☀";
            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );
            themeToggle.setAttribute(
                "title",
                "Switch to light mode"
            );
        } else {
            themeIcon.textContent = "☾";
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


    updateThemeIcon();


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            if (currentTheme === "dark") {

                document.documentElement.removeAttribute(
                    "data-theme"
                );

                localStorage.setItem(
                    "aiden-theme",
                    "light"
                );

            } else {

                document.documentElement.setAttribute(
                    "data-theme",
                    "dark"
                );

                localStorage.setItem(
                    "aiden-theme",
                    "dark"
                );
            }

            updateThemeIcon();
        });
    }


    /* ================================
       MOBILE MENU
    ================================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    function openMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.add("open");

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );
        }

        document.body.style.overflow = "hidden";
    }


    function closeMobileMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("open");

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

        document.body.style.overflow = "";
    }


    if (menuButton) {
        menuButton.addEventListener("click", openMenu);
    }


    if (closeMenu) {
        closeMenu.addEventListener(
            "click",
            closeMobileMenu
        );
    }


    /* Close menu after clicking a link */

    const mobileLinks =
        document.querySelectorAll(
            "#mobileMenu a"
        );

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


    /* Close menu with Escape */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMobileMenu();
        }

    });


    /* ================================
       HEADER ON SCROLL
    ================================= */

    const header =
        document.getElementById("siteHeader");


    function handleHeader() {

        if (!header) return;

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }
    }


    window.addEventListener(
        "scroll",
        handleHeader,
        { passive: true }
    );


    handleHeader();


    /* ================================
       SCROLL REVEAL
    ================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }


    /* ================================
       PRODUCT IMAGE FALLBACK
    ================================= */

    const productImages =
        document.querySelectorAll(
            ".product-image img"
        );


    productImages.forEach((image) => {

        image.addEventListener("error", () => {

            const container =
                image.closest(".product-image");

            if (container) {
                container.classList.add("empty");
            }

        });


        /*
         * If the image has already failed before
         * the event listener was attached.
         */

        if (image.complete && image.naturalWidth === 0) {

            const container =
                image.closest(".product-image");

            if (container) {
                container.classList.add("empty");
            }
        }

    });


    /* ================================
       CURRENT YEAR
    ================================= */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});
