/* =========================================================
   AIDEN PACE GRAPHICS
   PREMIUM MVP STYLESHEET
========================================================= */


/* =========================================================
   RESET
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    font-family: "DM Sans", sans-serif;
    background: var(--background);
    color: var(--text);
    overflow-x: hidden;
    transition:
        background .35s ease,
        color .35s ease;
}

img {
    display: block;
    width: 100%;
}

button,
a {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

::selection {
    background: var(--cyan);
    color: #ffffff;
}


/* =========================================================
   VARIABLES
========================================================= */

:root {

    --blue: #414394;
    --blue-dark: #30316f;
    --cyan: #08a9e0;

    --background: #f5f5f2;
    --surface: #ffffff;
    --surface-2: #eeeeeb;

    --text: #151515;
    --muted: #707070;

    --border: rgba(21, 21, 21, .12);

    --shadow:
        0 20px 60px rgba(0, 0, 0, .08);

    --radius: 28px;
    --radius-small: 18px;

    --max-width: 1400px;

    --header-height: 82px;
}


/* =========================================================
   PREMIUM DARK MODE
========================================================= */

body.dark {

    color-scheme: dark;

    --background: #08090d;
    --surface: #11131a;
    --surface-2: #181b24;

    --text: #f3f4f6;
    --muted: #9ba1ae;

    --border: rgba(255, 255, 255, .09);

    --shadow:
        0 25px 70px rgba(0, 0, 0, .4);
}


/* subtle dark atmosphere */

body.dark::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;

    background:
        radial-gradient(
            circle at 10% 10%,
            rgba(65, 67, 148, .13),
            transparent 28%
        ),
        radial-gradient(
            circle at 90% 80%,
            rgba(8, 169, 224, .07),
            transparent 25%
        );
}


/* =========================================================
   GENERAL
========================================================= */

.section {
    width: min(
        calc(100% - 48px),
        var(--max-width)
    );

    margin-inline: auto;
    position: relative;
}

.section-number {
    padding-top: 105px;

    color: var(--blue);

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 2px;
}

em {
    color: var(--blue);
    font-style: normal;
}

body.dark em {
    color: #7175e6;
}

.eyebrow,
.section-heading > span,
.work-header span,
.contact-grid > div > span,
.why-heading > span {
    color: var(--blue);

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 2px;
}


/* =========================================================
   HEADER
========================================================= */

.header {
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: var(--header-height);

    padding-inline: clamp(20px, 5vw, 70px);

    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 1000;

    background: rgba(245, 245, 242, .78);

    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);

    border-bottom: 1px solid var(--border);

    transition:
        background .3s ease,
        box-shadow .3s ease;
}

body.dark .header {
    background: rgba(8, 9, 13, .78);
}

.header.scrolled {
    box-shadow:
        0 10px 40px rgba(0, 0, 0, .08);
}

.brand img {
    width: 150px;
    height: auto;
}

.desktop-nav {
    display: flex;
    gap: 32px;

    font-size: 14px;
    font-weight: 600;
}

.desktop-nav a {
    position: relative;
}

.desktop-nav a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 2px;

    background: var(--cyan);

    transition: width .3s ease;
}

.desktop-nav a:hover::after {
    width: 100%;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}


/* =========================================================
   BUTTONS
========================================================= */

.theme-button,
.menu-button {

    width: 44px;
    height: 44px;

    border: 1px solid var(--border);

    border-radius: 50%;

    background: var(--surface);
    color: var(--text);

    display: grid;
    place-items: center;

    transition:
        transform .3s ease,
        background .3s ease;
}

.theme-button:hover,
.menu-button:hover {
    transform: translateY(-2px);
}

.contact-button,
.primary-button {

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 14px;

    padding:
        9px
        10px
        9px
        21px;

    border-radius: 50px;

    background: var(--blue);
    color: #ffffff;

    font-size: 14px;
    font-weight: 600;

    transition:
        transform .3s ease,
        box-shadow .3s ease;
}

.contact-button span,
.primary-button span {

    width: 31px;
    height: 31px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: var(--cyan);
}

.contact-button:hover,
.primary-button:hover {

    transform: translateY(-3px);

    box-shadow:
        0 12px 30px rgba(65, 67, 148, .25);
}

.secondary-button {

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 14px 24px;

    border: 1px solid var(--border);

    border-radius: 50px;

    font-size: 14px;
    font-weight: 600;

    transition:
        background .3s ease,
        transform .3s ease;
}

.secondary-button:hover {
    background: var(--surface);
    transform: translateY(-3px);
}

.menu-button {
    display: none;
}


/* =========================================================
   MOBILE MENU
========================================================= */

.mobile-menu {

    position: fixed;
    inset: 0;

    z-index: 2000;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--background);

    opacity: 0;
    visibility: hidden;

    transform: translateY(-20px);

    transition:
        opacity .35s ease,
        transform .35s ease,
        visibility .35s;
}

.mobile-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.close-menu {

    position: absolute;

    top: 25px;
    right: 25px;

    width: 45px;
    height: 45px;

    border-radius: 50%;

    border: 1px solid var(--border);

    background: var(--surface);
    color: var(--text);
}

.mobile-menu-content {

    width: 80%;

    display: flex;
    flex-direction: column;

    gap: 20px;
}

.mobile-menu-content > span {

    color: var(--blue);

    font-size: 12px;
    letter-spacing: 2px;
}

.mobile-menu-content a {

    font-family: "Space Grotesk";

    font-size: clamp(40px, 10vw, 80px);

    font-weight: 600;

    letter-spacing: -3px;
}


/* =========================================================
   HERO
========================================================= */

.hero {

    min-height: 100vh;

    padding-top: 145px;
    padding-bottom: 80px;

    display: grid;

    grid-template-columns:
        1.05fr
        .95fr;

    align-items: center;

    gap: clamp(45px, 7vw, 110px);
}

.hero-left {
    max-width: 760px;
}

.hero h1 {

    margin: 25px 0;

    font-family: "Space Grotesk";

    font-size:
        clamp(62px, 8.5vw, 128px);

    line-height: .87;

    letter-spacing: -6px;
}

.hero h1 span {
    display: block;
    color: var(--blue);
}

.hero-description {

    max-width: 590px;

    color: var(--muted);

    font-size:
        clamp(16px, 1.5vw, 19px);

    line-height: 1.7;
}

.hero-buttons {

    display: flex;
    flex-wrap: wrap;

    gap: 12px;

    margin-top: 35px;
}

.hero-mini-stats {

    display: flex;

    gap: 35px;

    margin-top: 60px;

    padding-top: 22px;

    border-top: 1px solid var(--border);

    max-width: 500px;
}

.hero-mini-stats div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.hero-mini-stats strong {
    color: var(--cyan);
    font-size: 13px;
}

.hero-mini-stats span {
    font-size: 10px;
    letter-spacing: 2px;
    font-weight: 700;
}


/* =========================================================
   HERO CARD
========================================================= */

.hero-right {
    position: relative;
}

.hero-card {

    position: relative;

    min-height: 610px;

    overflow: hidden;

    border-radius: 45px;

    background: #111;

    box-shadow: var(--shadow);
}

.hero-card img {

    width: 100%;
    height: 100%;

    min-height: 610px;

    object-fit: cover;

    transition:
        transform 1s ease;
}

.hero-card:hover img {
    transform: scale(1.04);
}

.hero-card::after {

    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(0, 0, 0, .88),
            rgba(0, 0, 0, 0) 65%
        );
}

.hero-card-overlay {

    position: absolute;

    z-index: 2;

    left: 35px;
    right: 35px;
    bottom: 35px;

    color: #ffffff;
}

.hero-card-overlay > span {

    display: block;

    margin-bottom: 12px;

    color: var(--cyan);

    font-size: 11px;

    letter-spacing: 2px;
}

.hero-card-overlay strong {

    display: block;

    font-family: "Space Grotesk";

    font-size:
        clamp(30px, 3vw, 46px);

    line-height: 1;
}

.hero-card-overlay a {

    display: inline-flex;

    align-items: center;

    gap: 10px;

    margin-top: 20px;

    font-size: 13px;
    font-weight: 600;

    opacity: .9;
}

.hero-stamp {

    position: absolute;

    right: -32px;
    bottom: -32px;

    width: 135px;
    height: 135px;

    border-radius: 50%;

    background: var(--blue);

    color: #ffffff;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border: 8px solid var(--background);

    z-index: 5;
}

.hero-stamp span {

    font-family: "Space Grotesk";

    font-size: 30px;
    font-weight: 700;
}

.hero-stamp small {

    color: var(--cyan);

    font-size: 9px;

    letter-spacing: 2px;
}


/* =========================================================
   MARQUEE
========================================================= */

.marquee {

    overflow: hidden;

    padding: 28px 0;

    background: var(--blue);

    color: #ffffff;
}

.marquee-track {

    width: max-content;

    display: flex;
    align-items: center;

    gap: 35px;

    animation:
        marquee 25s linear infinite;
}

.marquee span {

    font-family: "Space Grotesk";

    font-size:
        clamp(35px, 5vw, 70px);

    font-weight: 600;

    white-space: nowrap;
}

.marquee b {
    color: var(--cyan);
}

@keyframes marquee {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }

}


/* =========================================================
   SECTION HEADINGS
========================================================= */

.section-heading {

    max-width: 900px;

    margin:
        25px 0
        75px;
}

.section-heading h2,
.work-header h2,
.why-heading h2,
.contact-grid h2,
.cta h2 {

    margin-top: 18px;

    font-family: "Space Grotesk";

    font-size:
        clamp(48px, 7vw, 100px);

    line-height: .93;

    letter-spacing: -4px;
}


/* =========================================================
   ABOUT
========================================================= */

.about {
    padding-bottom: 140px;
}

.about-content {

    display: grid;

    grid-template-columns:
        1.2fr
        .8fr;

    gap: 90px;
}

.about-text {
    max-width: 720px;
}

.large-text {

    margin-bottom: 30px;

    font-size:
        clamp(23px, 3vw, 38px);

    line-height: 1.2;
}

.about-text p:not(.large-text) {

    color: var(--muted);

    line-height: 1.8;
}

.text-link {

    display: inline-block;

    margin-top: 30px;

    color: var(--blue);

    font-weight: 700;

    border-bottom:
        1px solid var(--blue);

    padding-bottom: 5px;
}

.about-stats {

    border-top:
        1px solid var(--border);
}

.about-stats div {

    display: grid;

    grid-template-columns:
        60px 1fr;

    gap: 10px;

    padding: 25px 0;

    border-bottom:
        1px solid var(--border);
}

.about-stats strong {
    color: var(--cyan);
}

.about-stats span {

    font-size: 11px;

    letter-spacing: 2px;

    font-weight: 700;
}

.about-stats p {

    grid-column: 2;

    color: var(--muted);
}


/* =========================================================
   SERVICES
========================================================= */

.services {
    padding-bottom: 150px;
}

.service-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}

.service-card {

    min-height: 400px;

    padding: 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: var(--surface);

    border:
        1px solid var(--border);

    border-radius: var(--radius);

    box-shadow:
        0 15px 50px rgba(0, 0, 0, .035);

    transition:
        transform .35s ease,
        border-color .35s ease;
}

body.dark .service-card {
    background: linear-gradient(
        145deg,
        #11131a,
        #0d0f14
    );
}

.service-card:hover {

    transform: translateY(-8px);

    border-color:
        rgba(65, 67, 148, .45);
}

.featured-service {

    background:
        linear-gradient(
            145deg,
            var(--blue),
            #30316f
        );

    color: #ffffff;
}

.featured-service p {
    color: rgba(255,255,255,.75) !important;
}

.featured-service a {
    color: #ffffff !important;
}

.service-top {

    display: flex;

    justify-content: space-between;

    color: var(--cyan);

    font-size: 13px;
}

.service-top i {
    font-size: 24px;
}

.service-card h3 {

    margin-bottom: 15px;

    font-family: "Space Grotesk";

    font-size: 32px;

    letter-spacing: -1px;
}

.service-card p {

    max-width: 350px;

    color: var(--muted);

    line-height: 1.7;
}

.service-card a {

    display: flex;

    justify-content: space-between;
    align-items: center;

    padding-top: 22px;

    border-top:
        1px solid var(--border);

    color: var(--blue);

    font-size: 13px;

    font-weight: 700;
}


/* =========================================================
   WORK
========================================================= */

.work {
    padding-bottom: 150px;
}

.work-header {

    display: flex;

    justify-content: space-between;

    align-items: end;

    gap: 40px;

    margin:
        25px 0
        50px;
}

.work-header > p {

    max-width: 400px;

    color: var(--muted);

    line-height: 1.7;
}

.filters {

    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin-bottom: 45px;
}

.filter {

    border:
        1px solid var(--border);

    background: transparent;

    color: var(--text);

    padding:
        10px
        20px;

    border-radius: 50px;

    transition:
        background .3s ease,
        color .3s ease;
}

.filter.active,
.filter:hover {

    background: var(--blue);

    border-color: var(--blue);

    color: #ffffff;
}


/* =========================================================
   PROJECT GRID
========================================================= */

.projects {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap:
        90px
        30px;
}

.project-large {
    grid-column: span 2;
}

.project {
    transition:
        opacity .35s ease,
        transform .35s ease;
}

.project.is-hidden {
    display: none;
}

.project-image {

    position: relative;

    overflow: hidden;

    border-radius: var(--radius);

    background: var(--surface-2);

    aspect-ratio: 4 / 3;
}

.project-large .project-image {
    aspect-ratio: 16 / 8;
}

.project-image img {

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
        transform .7s cubic-bezier(.2,.8,.2,1),
        filter .5s ease;
}

.project:hover .project-image img {

    transform: scale(1.045);

    filter:
        brightness(.78);
}

.project-number {

    position: absolute;

    top: 20px;
    left: 20px;

    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: rgba(0,0,0,.55);

    color: #ffffff;

    backdrop-filter: blur(10px);

    font-size: 12px;

    z-index: 3;
}

.image-overlay {

    position: absolute;

    right: 20px;
    bottom: 20px;

    display: flex;

    align-items: center;

    gap: 12px;

    padding:
        9px
        9px
        9px
        15px;

    border-radius: 50px;

    background: #ffffff;

    color: #151515;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1px;

    opacity: 0;

    transform: translateY(10px);

    transition:
        opacity .35s ease,
        transform .35s ease;
}

.image-overlay i {

    width: 27px;
    height: 27px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: var(--blue);

    color: #ffffff;
}

.project:hover .image-overlay {

    opacity: 1;

    transform: translateY(0);
}

.project-info {

    padding-top: 20px;
}

.project-info > span {

    color: var(--blue);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2px;
}

.project-info h3 {

    margin-top: 8px;

    font-family: "Space Grotesk";

    font-size:
        clamp(25px, 3vw, 38px);

    letter-spacing: -1.5px;
}

.project-info p {

    margin-top: 8px;

    max-width: 500px;

    color: var(--muted);

    line-height: 1.6;
}


/* =========================================================
   PRODUCTS
========================================================= */

.products {
    padding-bottom: 150px;
}

.product-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;
}

.product-card {

    overflow: hidden;

    background: var(--surface);

    border:
        1px solid var(--border);

    border-radius: 22px;

    transition:
        transform .35s ease,
        box-shadow .35s ease;
}

.product-card:hover {

    transform: translateY(-7px);

    box-shadow: var(--shadow);
}

.product-image {

    aspect-ratio: 1 / 1;

    overflow: hidden;

    background: var(--surface-2);
}

.product-image img {

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
        transform .6s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-content {

    padding: 22px;
}

.product-content > span {

    color: var(--blue);

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 700;
}

.product-content h3 {

    margin-top: 8px;

    font-family: "Space Grotesk";

    font-size: 22px;
}

.product-content p {

    margin-top: 8px;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.6;
}

.product-content a {

    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-top: 20px;

    padding-top: 15px;

    border-top:
        1px solid var(--border);

    color: var(--text);

    font-size: 12px;

    font-weight: 700;
}

.product-content a i {
    color: #25d366;
    font-size: 17px;
}


/* =========================================================
   WHY US
========================================================= */

.why {
    padding-bottom: 150px;
}

.why-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 100px;
}

.why-heading h2 {
    max-width: 650px;
}

.why-list {
    border-top:
        1px solid var(--border);
}

.why-item {

    display: grid;

    grid-template-columns:
        50px
        1fr;

    gap: 20px;

    padding: 28px 0;

    border-bottom:
        1px solid var(--border);
}

.why-item > span {
    color: var(--cyan);

    font-size: 12px;

    font-weight: 700;
}

.why-item h3 {

    font-family: "Space Grotesk";

    font-size: 25px;
}

.why-item p {

    margin-top: 8px;

    color: var(--muted);

    line-height: 1.6;
}


/* =========================================================
   PROCESS
========================================================= */

.process {
    padding-bottom: 150px;
}

.process-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 1px;

    border:
        1px solid var(--border);

    border-radius: var(--radius);

    overflow: hidden;
}

.process-step {

    min-height: 280px;

    padding: 28px;

    background: var(--surface);

    border-right:
        1px solid var(--border);
}

.process-step:last-child {
    border-right: 0;
}

.process-step > span {

    color: var(--cyan);

    font-size: 12px;

    font-weight: 700;
}

.process-step i {

    display: block;

    margin:
        50px 0 25px;

    color: var(--blue);

    font-size: 28px;
}

.process-step h3 {

    font-family: "Space Grotesk";

    font-size: 25px;
}

.process-step p {

    margin-top: 8px;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.6;
}


/* =========================================================
   CTA
========================================================= */

.cta {
    padding-bottom: 150px;
}

.cta-inner {

    position: relative;

    overflow: hidden;

    padding:
        clamp(50px, 8vw, 110px)
        clamp(25px, 7vw, 90px);

    border-radius: 40px;

    background:
        linear-gradient(
            135deg,
            var(--blue),
            #30316f
        );

    color: #ffffff;

    text-align: center;
}

.cta-inner::before {

    content: "";

    position: absolute;

    width: 400px;
    height: 400px;

    border-radius: 50%;

    background:
        rgba(8,169,224,.12);

    top: -200px;
    right: -100px;
}

.cta-inner > * {
    position: relative;
    z-index: 1;
}

.cta-inner > span {

    font-size: 11px;

    letter-spacing: 2px;

    font-weight: 700;
}

.cta h2 {

    max-width: 1000px;

    margin:
        20px
        auto
        35px;

    color: #ffffff;
}

.cta h2 em {
    color: var(--cyan);
}

.cta .primary-button {
    background: #ffffff;
    color: var(--blue);
}


/* =========================================================
   CONTACT
========================================================= */

.contact {
    padding-bottom: 150px;
}

.contact-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 100px;
}

.contact-grid h2 {
    max-width: 700px;
}

.contact-grid > div > p {

    max-width: 500px;

    margin-top: 30px;

    color: var(--muted);

    line-height: 1.8;
}

.contact-main-button {

    display: inline-flex;

    align-items: center;

    gap: 12px;

    margin-top: 30px;

    padding:
        15px
        22px;

    border-radius: 50px;

    background: #25d366;

    color: #ffffff;

    font-weight: 700;

    transition:
        transform .3s ease;
}

.contact-main-button:hover {
    transform: translateY(-3px);
}

.contact-main-button i {
    font-size: 19px;
}

.contact-details {

    border-top:
        1px solid var(--border);
}

.contact-item {

    position: relative;

    display: grid;

    grid-template-columns:
        100px
        1fr
        30px;

    align-items: center;

    gap: 15px;

    padding:
        25px
        0;

    border-bottom:
        1px solid var(--border);

    transition:
        padding .3s ease;
}

.contact-item:hover {
    padding-left: 8px;
}

.contact-item span {

    color: var(--blue);

    font-size: 10px;

    letter-spacing: 2px;

    font-weight: 700;
}

.contact-item strong {

    font-size: 15px;

    word-break: break-word;
}

.contact-item i {
    color: var(--cyan);
}


/* =========================================================
   FLOATING SOCIALS
========================================================= */

.floating-socials {

    position: fixed;

    right: 25px;
    bottom: 25px;

    z-index: 900;

    display: flex;
    flex-direction: column;

    gap: 8px;
}

.floating-socials a {

    width: 46px;
    height: 46px;

    display: grid;
    place-items: center;

    border:
        1px solid var(--border);

    border-radius: 50%;

    background:
        rgba(255,255,255,.85);

    color: var(--text);

    backdrop-filter: blur(15px);

    transition:
        transform .3s ease,
        background .3s ease;
}

body.dark .floating-socials a {
    background:
        rgba(17,19,26,.88);
}

.floating-socials a:hover {

    transform:
        translateY(-4px)
        scale(1.05);

    background: var(--blue);

    color: #ffffff;
}

.floating-socials .whatsapp:hover {
    background: #25d366;
}


/* =========================================================
   FOOTER
========================================================= */

footer {

    width: min(
        calc(100% - 48px),
        var(--max-width)
    );

    margin-inline: auto;

    padding:
        40px 0
        30px;

    border-top:
        1px solid var(--border);
}

.footer-top {

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 30px;
}

.footer-top img {
    width: 140px;
}

.footer-top p {

    color: var(--muted);

    font-size: 13px;
}

.footer-bottom {

    display: flex;

    justify-content: space-between;

    gap: 20px;

    margin-top: 60px;

    color: var(--muted);

    font-size: 11px;
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

.reveal {

    opacity: 0;

    transform: translateY(25px);

    transition:
        opacity .7s ease,
        transform .7s ease;
}

.reveal.revealed {

    opacity: 1;

    transform: translateY(0);
}


/* =========================================================
   FOCUS
========================================================= */

a:focus-visible,
button:focus-visible {

    outline:
        3px solid var(--cyan);

    outline-offset: 4px;
}


/* =========================================================
   RESPONSIVE — TABLET
========================================================= */

@media (max-width: 1100px) {

    .desktop-nav {
        gap: 20px;
    }

    .hero {
        grid-template-columns:
            1fr
            1fr;

        gap: 45px;
    }

    .hero h1 {
        font-size: clamp(60px, 8vw, 95px);
    }

    .hero-card,
    .hero-card img {
        min-height: 520px;
    }

    .service-grid {
        grid-template-columns: 1fr;
    }

    .product-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .process-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .process-step:nth-child(2) {
        border-right: 0;
    }

    .process-step:nth-child(-n+2) {
        border-bottom:
            1px solid var(--border);
    }

}


/* =========================================================
   RESPONSIVE — MOBILE
========================================================= */

@media (max-width: 800px) {

    .section {
        width:
            min(
                calc(100% - 32px),
                var(--max-width)
            );
    }

    .header {
        height: 72px;
    }

    .brand img {
        width: 125px;
    }

    .desktop-nav,
    .header .contact-button {
        display: none;
    }

    .menu-button {
        display: grid;
    }

    .hero {

        min-height: auto;

        padding-top: 125px;
        padding-bottom: 70px;

        grid-template-columns: 1fr;

        gap: 55px;
    }

    .hero h1 {

        font-size:
            clamp(58px, 17vw, 90px);

        letter-spacing: -4px;
    }

    .hero-card,
    .hero-card img {
        min-height: 480px;
    }

    .hero-stamp {

        right: -18px;
        bottom: -18px;

        width: 105px;
        height: 105px;
    }

    .hero-mini-stats {
        margin-top: 40px;
    }

    .section-number {
        padding-top: 75px;
    }

    .section-heading {
        margin-bottom: 50px;
    }

    .section-heading h2,
    .work-header h2,
    .why-heading h2,
    .contact-grid h2,
    .cta h2 {

        font-size:
            clamp(45px, 13vw, 70px);

        letter-spacing: -3px;
    }

    .about-content,
    .why-grid,
    .contact-grid {

        grid-template-columns: 1fr;

        gap: 55px;
    }

    .work-header {

        flex-direction: column;

        align-items: flex-start;

        gap: 20px;
    }

    .projects {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .project-large {
        grid-column: span 1;
    }

    .project-large .project-image {
        aspect-ratio: 4 / 3;
    }

    .image-overlay {
        opacity: 1;
        transform: none;
    }

    .product-grid {
        grid-template-columns: 1fr 1fr;
    }

    .process-grid {
        grid-template-columns: 1fr;
    }

    .process-step {
        min-height: auto;
        border-right: 0;
        border-bottom:
            1px solid var(--border);
    }

    .process-step:last-child {
        border-bottom: 0;
    }

    .process-step:nth-child(2) {
        border-right: 0;
    }

    .cta-inner {
        border-radius: 28px;
    }

    .contact-item {
        grid-template-columns:
            80px
            1fr
            25px;
    }

}


/* =========================================================
   SMALL PHONES
========================================================= */

@media (max-width: 520px) {

    .hero h1 {
        font-size: 58px;
    }

    .hero-buttons {

        flex-direction: column;

        align-items: stretch;
    }

    .primary-button,
    .secondary-button {

        width: 100%;
    }

    .hero-card,
    .hero-card img {
        min-height: 400px;
    }

    .product-grid {
        grid-template-columns: 1fr;
    }

    .floating-socials {

        right: 14px;
        bottom: 14px;
    }

    .floating-socials a {

        width: 42px;
        height: 42px;
    }

    .footer-top,
    .footer-bottom {

        flex-direction: column;

        align-items: flex-start;
    }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {

        animation-duration: .01ms !important;

        animation-iteration-count: 1 !important;

        transition-duration: .01ms !important;
    }

}
