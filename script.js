/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });

});


/* =========================================
   SUBTLE SNOW EFFECT
========================================= */

const snowContainer = document.querySelector(".snow-container");

const numberOfSnowflakes = 75; //32;


for (let i = 0; i < numberOfSnowflakes; i++) {

    const snowflake = document.createElement("span");

    snowflake.classList.add("snowflake");

    snowflake.innerHTML = "•";

    snowflake.style.left =
        `${Math.random() * 100}%`;

    // Random snowflake sizes between 10px and 20px
    snowflake.style.fontSize = 
        `${Math.random() * 12 + 12}px`;

    snowflake.style.opacity =
        Math.random() * 0.55 + 0.2;

    snowflake.style.animationDuration =
        `${Math.random() * 9 + 9}s`;

    snowflake.style.animationDelay =
        `${Math.random() * -15}s`;

    snowContainer.appendChild(snowflake);

}

// snowflake.style.fontSize =
// `${Math.random() * 9 + 5}px`;


/* =========================================
   GENTLE SCROLL REVEAL
========================================= */

const revealItems = document.querySelectorAll(
    ".timeline-card, .registry-card, .gallery-photo"
);


revealItems.forEach((item) => {
    item.classList.add("reveal-item");
});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealItems.forEach((item) => {

    observer.observe(item);

});