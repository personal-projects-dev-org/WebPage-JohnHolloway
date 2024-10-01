/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.page-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Detach observer after adding class to prevent re-triggering

                // Animaciones para mission y vision
                if (entry.target.id === 'about') {
                    const mission = document.getElementById('mission');
                    const vision = document.getElementById('vision');

                    if (mission) {
                        setTimeout(() => {
                            mission.classList.add('visible');
                        }, 500); // Retraso para mission
                    }

                    if (vision) {
                        setTimeout(() => {
                            vision.classList.add('visible');
                        }, 1000); // Retraso para vision
                    }
                }

                // Animaciones para products-row1 y products-row2
                if (entry.target.id === 'products') {
                    const row1 = document.querySelectorAll('.products-row1');
                    const row2 = document.querySelectorAll('.products-row2');

                    row1.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('visible');
                        }, 500 + (index * 100)); // Retraso para cada elemento en row1
                    });

                    row2.forEach((element, index) => {
                        setTimeout(() => {
                            element.classList.add('visible');
                        }, 1000 + (index * 100)); // Retraso para cada elemento en row2
                    });
                }
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is in view
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('.mast-heading2');
    const subheading = document.querySelector('.mast-subheading2');
    const btn = document.querySelector('.animbtn');

    // Function to add 'visible' class to elements
    function makeVisible(element, delay) {
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
    }

    // Apply animation with delay
    makeVisible(subheading, 500); // 0.5 seconds delay
    makeVisible(heading, 500); // 1 second delay
    makeVisible(btn, 1000);
});

$('.brands-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});



$(".home-carousel").owlCarousel({
    items: 1,  // Mostrará una imagen a la vez
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,  // Cambia cada 3 segundos
    dots: false,
    nav: false,
    smartSpeed: 3000,  // Tiempo de transición entre imágenes (1000ms = 1s)
    animateOut: 'fadeOut',  // Desvanecer al salir
    animateIn: 'fadeIn',  // Aparecer al entrar
});

