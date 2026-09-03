
/* =========================================
   DARK / LIGHT MODE (Improved)
========================================= */

const themeToggle = document.getElementById("themeToggle");

// Helper: Save theme to localStorage
function setTheme(theme) {
    localStorage.setItem("aiden-theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
    themeToggle.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

// Load saved theme or system preference
const savedTheme = localStorage.getItem("aiden-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme(prefersDark ? "dark" : "light");
}

// Toggle on click
themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
});

/* =========================================
   Smooth Transition (CSS required)
========================================= */
/* Add this to your CSS file:
body {
    transition: background-color 0.4s ease, color 0.4s ease;
}
*/


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "aiden-theme",
        darkMode ? "dark" : "light"
    );

    themeToggle.innerHTML = darkMode
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

    document.body.style.overflow = "hidden";

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    document.body.style.overflow = "";

});


/* Close menu when link is clicked */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        });

    });


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filters =
    document.querySelectorAll(".filter");

const projects =
    document.querySelectorAll(".project");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {

            item.classList.remove("active");

        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;


        projects.forEach(project => {

            const projectCategory =
                project.dataset.category;


            if (
                category === "all" ||
                projectCategory === category
            ) {

                project.style.display = "";

                setTimeout(() => {

                    project.style.opacity = "1";
                    project.style.transform =
                        "translateY(0)";

                }, 20);

            }

            else {

                project.style.opacity = "0";

                project.style.transform =
                    "translateY(20px)";

                setTimeout(() => {

                    project.style.display = "none";

                }, 250);

            }

        });

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".project, .capability, .about-text, .about-stats"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
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

    observer.observe(element);

});


/* Add revealed style dynamically */

const revealStyle =
    document.createElement("style");

revealStyle.innerHTML = `

    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

`;

document.head.appendChild(revealStyle);


/* =========================================
   HEADER BACKGROUND ON SCROLL
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================
   CLOSE MOBILE MENU WITH ESC
========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    }

});
