/* =====================================================
   AIDEN PACE GRAPHICS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       ELEMENTS
    ================================================= */

    const body =
        document.body;

    const header =
        document.getElementById("header");

    const themeToggle =
        document.getElementById("themeToggle");

    const menuButton =
        document.getElementById("menuButton");

    const closeMenu =
        document.getElementById("closeMenu");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu-content a"
        );

    const themeMeta =
        document.querySelector(
            'meta[name="theme-color"]'
        );


    /* =================================================
       DARK / LIGHT MODE
    ================================================= */

    const savedTheme =
        localStorage.getItem(
            "aiden-theme"
        );


    const systemDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    /*
       Priority:

       1. User's saved choice
       2. System preference
       3. Light mode
    */

    let initialDarkMode;


    if (savedTheme === "dark") {

        initialDarkMode = true;

    }

    else if (savedTheme === "light") {

        initialDarkMode = false;

    }

    else {

        initialDarkMode = systemDark;

    }


    applyTheme(initialDarkMode, false);


    /* =================================================
       THEME FUNCTION
    ================================================= */

    function applyTheme(
        darkMode,
        saveChoice = true
    ) {

        body.classList.toggle(
            "dark",
            darkMode
        );


        if (themeToggle) {

            themeToggle.innerHTML =
                darkMode

                    ? '<i class="fa-solid fa-sun"></i>'

                    : '<i class="fa-solid fa-moon"></i>';


            themeToggle.setAttribute(
                "aria-label",
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );


            themeToggle.setAttribute(
                "title",
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }


        if (themeMeta) {

            themeMeta.setAttribute(
                "content",
                darkMode
                    ? "#090a0d"
                    : "#f5f5f2"
            );

        }


        if (saveChoice) {

            localStorage.setItem(
                "aiden-theme",
                darkMode
                    ? "dark"
                    : "light"
            );

        }

    }


    /* =================================================
       THEME TOGGLE
    ================================================= */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const darkMode =
                    !body.classList.contains(
                        "dark"
                    );


                applyTheme(
                    darkMode,
                    true
                );

            }
        );

    }


    /* =================================================
       FOLLOW SYSTEM THEME
       ONLY IF USER HAS NOT MANUALLY
       CHOSEN A THEME
    ================================================= */

    const colorScheme =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        );


    colorScheme.addEventListener(
        "change",
        event => {

            const storedTheme =
                localStorage.getItem(
                    "aiden-theme"
                );


            if (
                storedTheme !== "dark" &&
                storedTheme !== "light"
            ) {

                applyTheme(
                    event.matches,
                    false
                );

            }

        }
    );


    /* =================================================
       MOBILE MENU — OPEN
    ================================================= */

    function openMobileMenu() {

        if (!mobileMenu) {
            return;
        }


        mobileMenu.classList.add(
            "active"
        );


        body.classList.add(
            "menu-open"
        );


        mobileMenu.setAttribute(
            "aria-hidden",
            "false"
        );


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    }


    /* =================================================
       MOBILE MENU — CLOSE
    ================================================= */

    function closeMobileMenu() {

        if (!mobileMenu) {
            return;
        }


        mobileMenu.classList.remove(
            "active"
        );


        body.classList.remove(
            "menu-open"
        );


        mobileMenu.setAttribute(
            "aria-hidden",
            "true"
        );


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /* =================================================
       MENU BUTTON
    ================================================= */

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            openMobileMenu
        );

    }


    /* =================================================
       CLOSE BUTTON
    ================================================= */

    if (closeMenu) {

        closeMenu.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    /* =================================================
       CLOSE MENU AFTER CLICKING LINK
    ================================================= */

    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


    /* =================================================
       CLOSE MENU WITH ESCAPE
    ================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu &&
                mobileMenu.classList.contains(
                    "active"
                )
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =================================================
       CLOSE MENU IF CLICKING OUTSIDE CONTENT
    ================================================= */

    if (mobileMenu) {

        mobileMenu.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    mobileMenu
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =================================================
       HEADER ON SCROLL
    ================================================= */

    function updateHeader() {

        if (!header) {
            return;
        }


        if (
            window.scrollY > 35
        ) {

            header.classList.add(
                "scrolled"
            );

        }

        else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".about-text, " +
            ".about-stats, " +
            ".product-card, " +
            ".capability, " +
            ".cta-inner, " +
            ".contact-grid"
        );


    revealElements.forEach(
        element => {

            element.classList.add(
                "reveal"
            );

        }
    );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "revealed"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    }

    else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }


    /* =================================================
       IMAGE FALLBACK
       Prevents ugly broken-image icons
       ================================================= */

    const images =
        document.querySelectorAll(
            ".product-image img"
        );


    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".desktop-nav a"
        );


    if (
        sections.length &&
        navLinks.length &&
        "IntersectionObserver"
        in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                navLinks.forEach(
                                    link => {

                                        link.classList.remove(
                                            "current"
                                        );


                                        if (
                                            link.getAttribute(
                                                "href"
                                            ) ===
                                            "#" +
                                            entry.target.id
                                        ) {

                                            link.classList.add(
                                                "current"
                                            );

                                        }

                                    }
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.35
                }
            );


        sections.forEach(
            section => {

                sectionObserver.observe(
                    section
                );

            }
        );

    }


});
