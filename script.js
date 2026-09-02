/* =========================================================
   AIDEN PACE GRAPHICS
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const themeToggle =
        document.getElementById("themeToggle");

    const menuButton =
        document.getElementById("menuButton");

    const closeMenu =
        document.getElementById("closeMenu");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const header =
        document.getElementById("header");

    const themeIcon =
        themeToggle?.querySelector("i");


    /* =====================================================
       THEME
    ===================================================== */

    const savedTheme =
        localStorage.getItem("aiden-theme");

    const systemDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    function updateThemeIcon() {

        if (!themeIcon || !themeToggle) {
            return;
        }

        const isDark =
            body.classList.contains("dark");

        themeIcon.className =
            isDark
                ? "fa-solid fa-sun"
                : "fa-solid fa-moon";

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

        themeToggle.setAttribute(
            "title",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

        const themeColor =
            isDark
                ? "#08090d"
                : "#f5f5f2";

        document
            .querySelector('meta[name="theme-color"]')
            ?.setAttribute(
                "content",
                themeColor
            );
    }


    if (
        savedTheme === "dark" ||
        (!savedTheme && systemDark)
    ) {

        body.classList.add("dark");

    } else {

        body.classList.remove("dark");

    }

    updateThemeIcon();


    themeToggle?.addEventListener(
        "click",
        () => {

            body.classList.toggle("dark");

            const isDark =
                body.classList.contains("dark");

            localStorage.setItem(
                "aiden-theme",
                isDark
                    ? "dark"
                    : "light"
            );

            updateThemeIcon();

        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMenu() {

        mobileMenu?.classList.add("active");

        menuButton?.setAttribute(
            "aria-expanded",
            "true"
        );

        body.style.overflow = "hidden";
    }


    function closeMobileMenu() {

        mobileMenu?.classList.remove("active");

        menuButton?.setAttribute(
            "aria-expanded",
            "false"
        );

        body.style.overflow = "";
    }


    menuButton?.addEventListener(
        "click",
        openMenu
    );


    closeMenu?.addEventListener(
        "click",
        closeMobileMenu
    );


    document
        .querySelectorAll(".mobile-menu-content a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        }
    );


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 25) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       PORTFOLIO FILTER
    ===================================================== */

    const filters =
        document.querySelectorAll(".filter");

    const projects =
        document.querySelectorAll(".project");


    filters.forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                const selected =
                    filter.dataset.filter;

                filters.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                filter.classList.add("active");


                projects.forEach(project => {

                    const category =
                        project.dataset.category;

                    if (
                        selected === "all" ||
                        category === selected
                    ) {

                        project.classList.remove(
                            "is-hidden"
                        );

                    } else {

                        project.classList.add(
                            "is-hidden"
                        );

                    }

                });

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".about-text, " +
            ".about-stats, " +
            ".service-card, " +
            ".project, " +
            ".product-card, " +
            ".why-item, " +
            ".process-step, " +
            ".contact-item"
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       STAGGER CARD ANIMATIONS
    ===================================================== */

    const cardGroups = [
        ".service-card",
        ".product-card",
        ".process-step"
    ];


    cardGroups.forEach(selector => {

        document
            .querySelectorAll(selector)
            .forEach((card, index) => {

                card.style.transitionDelay =
                    `${index * 70}ms`;

            });

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.opacity = "0.35";

                    image.parentElement?.classList.add(
                        "image-missing"
                    );

                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".desktop-nav a"
        );


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const id =
                        entry.target.getAttribute("id");

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "current"
                        );

                        if (
                            link.getAttribute("href") ===
                            `#${id}`
                        ) {

                            link.classList.add(
                                "current"
                            );

                        }

                    });

                });

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });


    /* =====================================================
       CLOSE MOBILE MENU WHEN RESIZING
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 800
            ) {

                closeMobileMenu();

            }

        }
    );

});
