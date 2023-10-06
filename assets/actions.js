document.addEventListener("DOMContentLoaded",() => {
    const menuBtn = document.querySelector(".hamburguer");
    const menuBtnIcon = document.querySelector(".hamburguer i");
    const scrollingNavbar = document.querySelector(".navbar__links");


    menuBtn.onclick = function() {
        if (scrollingNavbar.classList.contains("active")) {
            CloseScrollingNavbar();
        } else {
            OpenScrollingNavbar();
        }
    }

    // cerrar navbar al cambiar window size
    window.addEventListener("resize", CloseScrollingNavbar);

    // cerrar navbar al hacer click en cualquier link
    document.querySelectorAll(".navbar__links li a").forEach(function(link) {
        link.onclick = CloseScrollingNavbar;
    });

    // cerrar navbar
    function CloseScrollingNavbar(){
        scrollingNavbar.classList.remove("active");
        menuBtnIcon.classList = "fa-solid fa-bars"

    };

    // abrir navbar
    function OpenScrollingNavbar(){
        scrollingNavbar.classList.add("active");
        menuBtnIcon.classList = "fa-solid fa-xmark"

    };

    // SERVICOS

    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", () => {
        const accordionContent = accordionHeader.nextElementSibling;
        accordionHeader.classList.toggle("active");
        accordionContent.classList.toggle("active");
    });
});


    // POP-UPS
    const buttons = document.querySelectorAll('.mas__informacion');
        let isPop = false;
        
        buttons.forEach((button) => {
          button.addEventListener('click', () => {
            if (!isPop) {
              const meta = button.getAttribute('data-meta');
              
              const popUp = document.querySelector(meta);
              popUp.classList.add('active');
              
              isPop = true;
            }
          });
        });
        const closeBtns = document.querySelectorAll(".close-btn");
        closeBtns.forEach((closebtn) => {
            closebtn.addEventListener("click", () => {
                console.log(closebtn.parentNode.classList.remove("active"));
                isPop = false;
            });
        });

    // CONTATO
    const formHtml = document.getElementById("contact_form");
    formHtml.onsubmit = function(e) {
        e.preventDefault();
        const form = new FormData(this);
        fetch(this.action, {
            method:"POST",
            body: form,
        })
        .then(response => {
            if (!response.ok) {
                // MENSAJE DE ERROR
                Swal.fire({
                    icon: 'warning',
                    title: 'Quase prontos',
                    text: 'Por favor, certifiquese de preencher nome, telefone e email',
                  });
            } else {
                // MENSAJE DE EXITO
                Swal.fire({
                    icon: 'success',
                    title: 'Datos enviados',
                    text: 'Entraremos em contato em breve',
                    showConfirmButton: false,
                    timer: 3000
                  });
                formHtml.reset();
            }
        })
    }
})


// git config --global pull.rebase false