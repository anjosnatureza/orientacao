document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link, .navbar-brand");

    links.forEach((link) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const headerHeight = document.querySelector(".navbar").offsetHeight;
            const sectionId = link.getAttribute("href");
            let section;
            if (sectionId === "#") {
                section = document.documentElement; // Scroll to the top of the page
            } else {
                section = document.querySelector(sectionId); // Scroll to the section
            }
            if (section) {
                const sectionPosition = section === document.documentElement ? 0 : section.offsetTop - headerHeight;
                window.scrollTo({
                    top: sectionPosition,
                    behavior: "smooth",
                });
            }

            // Check if the menu is in responsive mode and close it
            const navbarToggler = document.querySelector(".navbar-toggler");

            if (navbarToggler && navbarToggler.getAttribute("aria-expanded") === "true") {
                navbarToggler.click(); // Close the responsive menu
            }
        });
    });

    // Initialize carousel
    $(".carousel").carousel();

    // Show maintenance modal on page load
    $('#maintenanceModal').modal('show');

    // Smooth scrolling to the top of the page when the page is loaded or refreshed
    window.onload = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Show atual date 
    window.onload = function() {
        var anoAtual = new Date().getFullYear();
        document.getElementById("anoAtual").innerHTML = anoAtual;
    };
});
