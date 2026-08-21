// ==========================================
// AIDEN PACE GRAPHICS - MAIN JAVASCRIPT
// ==========================================


// ---------- DARK / LIGHT MODE ----------

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("apg-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(
        "apg-theme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon();
});


function updateThemeIcon() {

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );
    } else {
        themeToggle.textContent = "☾";
        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }
}


// ---------- MOBILE MENU ----------

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

    if (nav.classList.contains("mobile-open")) {

        nav.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.top = "72px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "25px";
        nav.style.background = "var(--bg)";
        nav.style.flexDirection = "column";
        nav.style.gap = "20px";
        nav.style.borderBottom =
            "1px solid var(--line)";

    } else {

        nav.removeAttribute("style");

    }

});


// ---------- CLOSE MOBILE MENU AFTER CLICK ----------

const navigationLinks =
    document.querySelectorAll("nav a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

        if (window.innerWidth <= 1000) {
            nav.removeAttribute("style");
        }

    });

});


// ---------- SMOOTH SCROLL ----------

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ---------- NAVBAR SHADOW ON SCROLL ----------

const header =
    document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ---------- SCROLL REVEAL ANIMATION ----------

const revealElements =
    document.querySelectorAll(
        ".section, .project, .service-list article, .dark-panel, .contact-cards a"
    );

const revealObserver =
    new IntersectionObserver(
        (entries) => {

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

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ---------- PARALLAX HERO GRAPHICS ----------

const heroArt =
    document.querySelector(".hero-art");

const frontCard =
    document.querySelector(".front-card");

const backCard =
    document.querySelector(".back-card");

window.addEventListener("mousemove", (event) => {

    if (!heroArt || window.innerWidth < 900) {
        return;
    }

    const x =
        (window.innerWidth / 2 - event.clientX) / 70;

    const y =
        (window.innerHeight / 2 - event.clientY) / 70;

    frontCard.style.transform =
        `rotate(-4deg) translate(${x}px, ${y}px)`;

    backCard.style.transform =
        `rotate(7deg) translate(${-x}px, ${-y}px)`;

});


// ---------- CURRENT YEAR ----------

const year =
    document.querySelector("footer small");

if (year) {

    const currentYear =
        new Date().getFullYear();

    year.textContent =
        `© ${currentYear} Aiden Pace Graphics. All rights reserved.`;

}


// ---------- WHATSAPP QUOTE BUTTON ----------

const quoteButton =
    document.querySelector(
        '.final-cta a[href*="wa.me"]'
    );

if (quoteButton) {

    quoteButton.addEventListener("click", () => {

        console.log(
            "Opening Aiden Pace Graphics WhatsApp..."
        );

    });

}


// ---------- CONTACT CARD HOVER ----------

const contactCards =
    document.querySelectorAll(
        ".contact-cards a"
    );

contactCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateX(6px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateX(0)";

    });

});


// ---------- HANDLE WINDOW RESIZE ----------

window.addEventListener("resize", () => {

    if (window.innerWidth > 1000) {

        nav.classList.remove("mobile-open");

        nav.removeAttribute("style");

    }

});


// ---------- PAGE LOADED ----------

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

        console.log(
            "Aiden Pace Graphics website loaded successfully."
        );

    }
);
