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
           
            const navbarToggler = document.querySelector(".navbar-toggler");

            if (navbarToggler && navbarToggler.getAttribute("aria-expanded") === "true") {
                navbarToggler.click(); // Close the responsive menu
            }
        });
    });

   
    $(".carousel").carousel();
    
    $('#maintenanceModal').modal('show');
    
    window.onload = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    var spanAno = document.getElementById('anoAtual');
    var anoAtual = new Date().getFullYear();
    spanAno.textContent = anoAtual;
         
        var closeButton = document.querySelector('.close-button');
        
        var maintenanceOverlay = document.querySelector('.maintenance-overlay');
	
	document.querySelector('.close-button').addEventListener('click', function() {		
		document.querySelector('.maintenance-overlay').style.display = 'none';
	});
    
});
