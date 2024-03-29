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
    var spanAno = document.getElementById('anoAtual');
    var anoAtual = new Date().getFullYear();
    spanAno.textContent = anoAtual;

    // efetuar a pesquisa
      document.getElementById("botaoPesquisar").addEventListener("click", function() {
         // Obtenha o valor digitado no campo de entrada
         var termoPesquisa = document.getElementById("pesquisaInput").value.toLowerCase();

         // Se o termo de pesquisa estiver vazio, não faça nada
         if (termoPesquisa.trim() === "") {
            return;
         }

         // Percorra todos os elementos que você deseja pesquisar
         var elementos = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
         elementos.forEach(function(elemento) {
            // Verifique se o texto do elemento contém o termo de pesquisa
            var texto = elemento.textContent.toLowerCase();
            if (texto.includes(termoPesquisa)) {
               // Se o texto do elemento contém o termo de pesquisa, exiba-o
               elemento.style.display = "block"; // Ou qualquer outra forma de destacar o elemento
            } else {
               // Caso contrário, oculte-o
               elemento.style.display = "none";
            }
         });
      });    
});
