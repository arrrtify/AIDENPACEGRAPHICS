/* =====================================================
   AIDEN PACE GRAPHICS
   JAVASCRIPT
===================================================== */


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("aiden-pace-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀";

} else {

    themeToggle.textContent = "☾";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "aiden-pace-theme",
        darkMode ? "dark" : "light"
    );


    themeToggle.textContent =
        darkMode ? "☀" : "☾";

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");


const mobileMenu =
    document.getElementById("mobileMenu");


const closeMenu =
    document.getElementById("closeMenu");


menuToggle.addEventListener("click", () => {

    mobileMenu.classList.add("open");

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });



/* =====================================================
   PORTFOLIO FILTER
===================================================== */

const filters =
    document.querySelectorAll(".filter");


const projects =
    document.querySelectorAll(".project");


filters.forEach(filter => {

    filter.addEventListener("click", () => {


        filters.forEach(button => {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        const selected =
            filter.dataset.filter;


        projects.forEach(project => {

            const category =
                project.dataset.category;


            if (
                selected === "all" ||
                category === selected
            ) {

                project.classList.remove("hide");

            } else {

                project.classList.add("hide");

            }

        });

    });

});



/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const targetID =
                link.getAttribute("href");


            const target =
                document.querySelector(targetID);


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });



/* =====================================================
   REVEAL ANIMATIONS
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".section, .project, .contact-card, .about-cards article, .service-list article"
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});



/* =====================================================
   HERO MOUSE PARALLAX
===================================================== */

const heroCard =
    document.querySelector(
        ".hero-image-card"
    );


const badge =
    document.querySelector(
        ".floating-badge"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth < 900
        ) return;


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 80;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 80;


        if (heroCard) {

            heroCard.style.transform =
                `rotate(2deg) translate(${x}px, ${y}px)`;

        }


        if (badge) {

            badge.style.transform =
                `translate(${-x}px, ${-y}px)`;

        }

    }
);



/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            header.style.boxShadow =
                "0 12px 35px rgba(0,0,0,.07)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);



/* =====================================================
   CONTACT CARD FEEDBACK
===================================================== */

document
    .querySelectorAll(".contact-card")
    .forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.cursor =
                    "pointer";

            }
        );

    });



/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
