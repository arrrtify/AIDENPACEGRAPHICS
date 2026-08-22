/* =====================================================
   AIDEN PACE GRAPHICS
   PORTFOLIO STYLES
===================================================== */

:root {

    --blue: #3e3c98;
    --blue-light: #4c49aa;
    --cyan: #12aeea;

    --bg: #f4f4f2;
    --card: #ffffff;

    --text: #111217;
    --muted: #70727b;

    --border: #dedee2;

    --black: #090a0d;

    --radius: 28px;

    --transition: 0.3s ease;
}


body.dark {

    --bg: #090b0f;
    --card: #11141a;

    --text: #f5f6f8;
    --muted: #969ba7;

    --border: #272b33;
}


/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    font-family:
        "DM Sans",
        sans-serif;

    background: var(--bg);

    color: var(--text);

    line-height: 1.5;

    overflow-x: hidden;

    transition:
        background var(--transition),
        color var(--transition);
}


a {
    color: inherit;

    text-decoration: none;
}


button {
    font: inherit;
}


img {
    width: 100%;

    display: block;

    object-fit: cover;
}


/* =====================================================
   HEADER
===================================================== */

.header {

    height: 78px;

    width: min(
        1280px,
        calc(100% - 40px)
    );

    margin: auto;

    display: flex;

    align-items: center;

    justify-content: space-between;

    position: sticky;

    top: 0;

    z-index: 100;

    background:
        color-mix(
            in srgb,
            var(--bg) 88%,
            transparent
        );

    backdrop-filter: blur(18px);

    transition:
        background var(--transition);
}


.logo {

    display: flex;

    align-items: center;

    gap: 10px;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-weight: 700;

    font-size: 13px;

    letter-spacing: 1px;
}


.logo img {

    width: 52px;

    height: 52px;

    object-fit: contain;
}


.desktop-nav {

    display: flex;

    gap: 28px;

    font-size: 12px;

    font-weight: 600;
}


.desktop-nav a {

    color: var(--muted);

    transition:
        color var(--transition);
}


.desktop-nav a:hover {

    color: var(--blue);
}


.header-actions {

    display: flex;

    gap: 8px;
}


.theme-toggle,
.menu-toggle {

    width: 40px;

    height: 40px;

    border: 1px solid var(--border);

    border-radius: 50%;

    background: var(--card);

    color: var(--text);

    cursor: pointer;

    transition:
        transform var(--transition),
        border var(--transition);
}


.theme-toggle:hover,
.menu-toggle:hover {

    transform: translateY(-3px);

    border-color: var(--blue);
}


.menu-toggle {

    display: none;
}


/* =====================================================
   MOBILE MENU
===================================================== */

.mobile-menu {

    position: fixed;

    inset: 0;

    background: var(--black);

    color: white;

    z-index: 500;

    padding: 35px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    gap: 22px;

    transform: translateX(100%);

    transition:
        transform 0.4s ease;
}


.mobile-menu.open {

    transform: translateX(0);
}


.mobile-menu a {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 42px;

    font-weight: 600;
}


.mobile-menu-title {

    color: #74ddff;

    font-size: 10px;

    letter-spacing: 3px;

    margin-bottom: 20px;
}


.close-menu {

    position: absolute;

    top: 25px;

    right: 25px;

    width: 45px;

    height: 45px;

    border: 1px solid #333;

    border-radius: 50%;

    background: transparent;

    color: white;

    font-size: 25px;

    cursor: pointer;
}


/* =====================================================
   GENERAL
===================================================== */

.section {

    width: min(
        1180px,
        calc(100% - 40px)
    );

    margin: auto;

    padding:
        120px 0;
}


.eyebrow {

    font-size: 10px;

    letter-spacing: 3px;

    font-weight: 700;

    color: var(--blue);
}


.section-number {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 12px;

    font-weight: 700;

    color: var(--blue);

    margin-bottom: 30px;
}


.section-title small,
.contact-heading small {

    font-size: 10px;

    letter-spacing: 2px;

    font-weight: 700;

    color: var(--muted);
}


.section-title h2,
.contact-heading h2 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(50px, 7vw, 88px);

    line-height: 0.88;

    letter-spacing: -5px;

    margin-top: 15px;
}


/* =====================================================
   HERO
===================================================== */

.hero {

    min-height: 700px;

    display: grid;

    grid-template-columns:
        1fr 0.9fr;

    gap: 70px;

    align-items: center;

    padding-top: 80px;
}


.hero h1 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(75px, 11vw, 145px);

    line-height: 0.78;

    letter-spacing: -9px;

    margin:
        25px 0 35px;
}


.hero h1 span {

    color: var(--blue);
}


.hero h2 {

    max-width: 600px;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(25px, 3vw, 38px);

    line-height: 1.05;

    letter-spacing: -1px;
}


.hero-description {

    max-width: 520px;

    color: var(--muted);

    font-size: 14px;

    margin:
        25px 0 30px;
}


.hero-buttons {

    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}


.primary-button,
.secondary-button {

    display: inline-flex;

    align-items: center;

    gap: 12px;

    padding:
        13px 18px;

    border-radius: 100px;

    font-size: 11px;

    font-weight: 700;

    transition:
        transform var(--transition),
        box-shadow var(--transition);
}


.primary-button {

    background: var(--blue);

    color: white;
}


.primary-button span {

    width: 25px;

    height: 25px;

    display: grid;

    place-items: center;

    background: var(--cyan);

    color: #061019;

    border-radius: 50%;
}


.secondary-button {

    border: 1px solid var(--border);

    background: var(--card);
}


.primary-button:hover,
.secondary-button:hover {

    transform: translateY(-3px);

    box-shadow:
        0 12px 30px
        rgba(0,0,0,0.1);
}


/* =====================================================
   HERO IMAGE
===================================================== */

.hero-right {

    position: relative;

    min-height: 560px;

    display: grid;

    place-items: center;
}


.hero-image-card {

    width: min(
        450px,
        90%
    );

    height: 560px;

    border-radius:
        35px;

    overflow: hidden;

    position: relative;

    background:
        linear-gradient(
            135deg,
            var(--blue),
            var(--cyan)
        );

    transform:
        rotate(2deg);

    box-shadow:
        0 35px 70px
        rgba(0,0,0,0.18);
}


.hero-image-card img {

    width: 100%;

    height: 100%;

    object-fit: cover;
}


.image-overlay {

    position: absolute;

    inset: 0;

    padding: 28px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    background:
        linear-gradient(
            to bottom,
            rgba(0,0,0,.15),
            rgba(0,0,0,.75)
        );

    color: white;
}


.image-overlay span {

    font-size: 9px;

    letter-spacing: 2px;
}


.image-overlay strong {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 55px;

    line-height: .85;

    letter-spacing: -3px;
}


.image-overlay small {

    font-size: 10px;

    opacity: .7;
}


.floating-badge {

    position: absolute;

    right: 0;

    bottom: 40px;

    width: 100px;

    height: 100px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    background: var(--cyan);

    color: #061019;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 28px;

    font-weight: 700;

    box-shadow:
        0 15px 35px
        rgba(0,0,0,.18);
}


/* =====================================================
   FOCUS STRIP
===================================================== */

.focus-strip {

    width: min(
        1180px,
        calc(100% - 40px)
    );

    margin:
        0 auto 30px;

    display: grid;

    grid-template-columns:
        1.1fr
        1fr
        1fr
        1fr
        1.4fr;

    border:
        1px solid var(--border);

    border-radius:
        22px;

    overflow: hidden;

    background: var(--card);
}


.focus-strip > div {

    padding:
        22px 25px;

    border-right:
        1px solid var(--border);
}


.focus-strip > div:last-child {

    border-right: 0;
}


.focus-intro small {

    display: block;

    color: var(--muted);

    font-size: 9px;

    letter-spacing: 2px;
}


.focus-intro span {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 28px;

    color: var(--blue);
}


.focus-item {

    display: grid;

    grid-template-columns:
        25px 1fr;

    column-gap: 8px;
}


.focus-item span {

    color: var(--blue);

    font-size: 9px;
}


.focus-item strong {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 15px;
}


.focus-item small {

    grid-column: 2;

    color: var(--muted);

    font-size: 9px;
}


.availability {

    display: flex;

    align-items: center;

    gap: 8px;

    color: var(--muted);

    font-size: 10px;
}


.status-dot {

    width: 7px;

    height: 7px;

    border-radius: 50%;

    background: #20c77a;
}


/* =====================================================
   ABOUT
===================================================== */

.about {

    display: grid;

    grid-template-columns:
        60px
        0.7fr
        1.3fr;

    gap: 45px;
}


.about-content {

    display: grid;

    grid-template-columns:
        1fr 0.7fr;

    gap: 50px;
}


.about-main .label {

    font-size: 9px;

    letter-spacing: 2px;

    color: var(--blue);

    font-weight: 700;
}


.about-main h3 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 34px;

    line-height: 1;

    letter-spacing: -2px;

    margin:
        15px 0 25px;
}


.about-main p {

    color: var(--muted);

    font-size: 13px;

    margin-bottom: 15px;

    max-width: 500px;
}


.about-cards {

    display: grid;

    gap: 10px;
}


.about-cards article {

    padding: 22px;

    border:
        1px solid var(--border);

    border-radius:
        18px;

    background: var(--card);

    transition:
        transform var(--transition);
}


.about-cards article:hover {

    transform:
        translateX(6px);
}


.about-cards span {

    color: var(--cyan);

    font-size: 20px;
}


.about-cards small {

    display: block;

    margin-top: 15px;

    color: var(--muted);

    font-size: 8px;

    letter-spacing: 2px;
}


.about-cards h4 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 20px;

    line-height: 1;

    margin-top: 6px;
}


/* =====================================================
   WORK
===================================================== */

.work-heading {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    align-items: end;

    gap: 30px;
}


.work-heading h2 {

    grid-column: 1;
}


.work-heading p {

    grid-column: 2;

    color: var(--muted);

    max-width: 400px;

    font-size: 13px;
}


.filters {

    display: flex;

    gap: 8px;

    margin:
        45px 0 25px;
}


.filter {

    border:
        1px solid var(--border);

    background: var(--card);

    color: var(--muted);

    padding:
        9px 16px;

    border-radius: 100px;

    cursor: pointer;

    font-size: 10px;

    transition:
        all var(--transition);
}


.filter.active,
.filter:hover {

    background: var(--blue);

    color: white;

    border-color: var(--blue);
}


/* PROJECTS */

.project-grid {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 15px;
}


.project {

    min-height: 480px;

    border-radius:
        25px;

    overflow: hidden;

    background: var(--card);

    border:
        1px solid var(--border);

    transition:
        transform .35s ease,
        box-shadow .35s ease;
}


.project:hover {

    transform:
        translateY(-7px);

    box-shadow:
        0 25px 50px
        rgba(0,0,0,.1);
}


.project.featured {

    grid-row:
        span 2;
}


.project.wide {

    grid-column:
        span 1;
}


.project-image {

    height: 390px;

    overflow: hidden;
}


.project-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    transition:
        transform .6s ease;
}


.project:hover .project-image img {

    transform:
        scale(1.05);
}


.project-info {

    padding:
        18px 20px;

    display: flex;

    justify-content:
        space-between;

    align-items:
        center;
}


.project-info small {

    color: var(--blue);

    font-size: 8px;

    letter-spacing: 1.5px;

    font-weight: 700;
}


.project-info h3 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 21px;

    line-height: 1;

    margin-top: 5px;
}


.project-info > span {

    width: 35px;

    height: 35px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    background: var(--bg);

    color: var(--blue);
}


.more-work {

    text-align: center;

    color: var(--muted);

    font-size: 11px;

    margin-top: 25px;
}


/* =====================================================
   SERVICES
===================================================== */

.services {

    display: grid;

    grid-template-columns:
        60px
        .7fr
        1.3fr;

    gap: 45px;
}


.service-list {

    border-top:
        1px solid var(--border);
}


.service-list article {

    display: grid;

    grid-template-columns:
        50px 1fr 30px;

    gap: 20px;

    align-items: center;

    padding:
        28px 0;

    border-bottom:
        1px solid var(--border);
}


.service-number {

    color: var(--blue);

    font-size: 10px;

    font-weight: 700;
}


.service-list h3 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 25px;

    margin-bottom: 5px;
}


.service-list p {

    color: var(--muted);

    font-size: 12px;

    max-width: 500px;
}


.service-list article > span {

    color: var(--blue);

    font-size: 20px;
}


/* =====================================================
   STATEMENT
===================================================== */

.statement {

    width: min(
        1180px,
        calc(100% - 40px)
    );

    margin:
        20px auto 120px;

    min-height:
        480px;

    border-radius:
        30px;

    padding:
        70px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    background:
        linear-gradient(
            135deg,
            var(--blue),
            #302e75
        );

    color: white;

    position: relative;

    overflow: hidden;
}


.statement::after {

    content: "AP";

    position: absolute;

    right: -20px;

    bottom: -80px;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 350px;

    font-weight: 700;

    color:
        rgba(255,255,255,.06);
}


.statement p {

    color: #74ddff;

    font-size: 10px;

    letter-spacing: 3px;

    font-weight: 700;
}


.statement h2 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(55px, 8vw, 105px);

    line-height: .85;

    letter-spacing: -6px;

    margin:
        20px 0;
}


.statement span {

    font-size: 11px;

    color:
        rgba(255,255,255,.6);
}


/* =====================================================
   CONTACT
===================================================== */

.contact {

    display: grid;

    grid-template-columns:
        60px
        1fr;

    gap: 45px;
}


.contact-heading {

    max-width: 800px;
}


.contact-heading p {

    color: var(--muted);

    max-width: 450px;

    margin-top: 25px;
}


.contact-grid {

    grid-column:
        2;

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 10px;

    margin-top: 30px;
}


.contact-card {

    min-height: 200px;

    padding: 24px;

    border:
        1px solid var(--border);

    border-radius:
        20px;

    background: var(--card);

    position: relative;

    transition:
        transform var(--transition),
        border-color var(--transition);
}


.contact-card:hover {

    transform:
        translateY(-5px);

    border-color:
        var(--blue);
}


.contact-card > span {

    font-size: 24px;

    color: var(--blue);
}


.contact-card small {

    display: block;

    color: var(--muted);

    font-size: 8px;

    letter-spacing: 2px;

    margin-top: 25px;
}


.contact-card h3 {

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 25px;

    margin-top: 5px;
}


.contact-card p {

    color: var(--muted);

    font-size: 11px;
}


.contact-card strong {

    position: absolute;

    right: 20px;

    bottom: 20px;

    width: 32px;

    height: 32px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    background: var(--bg);

    color: var(--blue);
}


/* LOCATION */

.location {

    grid-column:
        2;

    margin-top: 15px;

    padding: 28px;

    border-radius:
        20px;

    background: var(--card);

    border:
        1px solid var(--border);

    display: flex;

    justify-content:
        space-between;

    align-items: center;

    gap: 30px;
}


.location small {

    color: var(--muted);

    font-size: 8px;

    letter-spacing: 2px;
}


.location h3 {

    font-family:
        "Space Grotesk",
        sans-serif;

    margin-top: 5px;
}


.location p {

    color: var(--muted);

    font-size: 11px;
}


.map-button {

    background:
        var(--blue);

    color: white;

    padding:
        13px 18px;

    border-radius:
        100px;

    font-size: 10px;

    font-weight: 700;

    white-space: nowrap;
}


/* =====================================================
   FOOTER
===================================================== */

footer {

    background:
        var(--black);

    color: white;

    padding:
        70px max(
            20px,
            calc((100vw - 1180px) / 2)
        )
        25px;
}


.footer-top {

    display: flex;

    justify-content:
        space-between;

    gap: 40px;

    align-items:
        flex-start;
}


.footer-logo img {

    width: 150px;

    height: auto;
}


.footer-top p {

    color: #74ddff;

    font-size: 9px;

    letter-spacing: 2px;

    margin-top: 10px;
}


.footer-socials {

    display: flex;

    flex-wrap: wrap;

    gap: 20px;
}


.footer-socials a {

    color: #aaa;

    font-size: 10px;

    transition:
        color var(--transition);
}


.footer-socials a:hover {

    color: white;
}


.footer-bottom {

    margin-top: 60px;

    padding-top: 20px;

    border-top:
        1px solid #272a31;

    display: flex;

    justify-content:
        space-between;

    color: #666;

    font-size: 9px;
}


/* =====================================================
   FLOATING BUTTONS
===================================================== */

.floating-actions {

    position: fixed;

    right: 18px;

    bottom: 20px;

    display: flex;

    flex-direction: column;

    gap: 7px;

    z-index: 200;
}


.floating-actions a {

    width: 43px;

    height: 43px;

    border-radius: 50%;

    background: var(--card);

    border:
        1px solid var(--border);

    display: grid;

    place-items: center;

    font-size: 8px;

    font-weight:
