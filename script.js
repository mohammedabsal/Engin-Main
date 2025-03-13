// Add any interactive JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const glowText = document.querySelector(".glow-text");
    let isGlowing = true;

    setInterval(() => {
        glowText.style.textShadow = isGlowing 
            ? "0 0 10px cyan, 0 0 20px cyan" 
            : "0 0 20px cyan, 0 0 30px cyan";
        isGlowing = !isGlowing;
    }, 1500);
});

//Unleash Your Potential
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `rotateY(${x * 20}deg) rotateX(${y * -20}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
        });
    });
});


//Ready to launch your startup and get in touch
// Optional: Add hover effect with JavaScript
document.querySelector('.cta-button').addEventListener('mouseover', () => {
    document.querySelector('.cta-card').style.boxShadow = "0 0 20px cyan";
});

document.querySelector('.cta-button').addEventListener('mouseleave', () => {
    document.querySelector('.cta-card').style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.2)";
});


//Header
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuContainer = document.querySelector(".menu-container");

    menuToggle.addEventListener("click", function () {
        menuContainer.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !menuContainer.contains(event.target)) {
            menuContainer.classList.remove("active");
        }
    });

    // Reset menu visibility on resize
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menuContainer.classList.remove("active");
        }
    });
});



