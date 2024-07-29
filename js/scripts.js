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




document.addEventListener('DOMContentLoaded', function() {
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

                // Animaciones para portfolio-row1 y portfolio-row2
                if (entry.target.id === 'portfolio') {
                    const row1 = document.querySelectorAll('.portfolio-row1');
                    const row2 = document.querySelectorAll('.portfolio-row2');

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


document.addEventListener('DOMContentLoaded', function() {
    const subheading = document.querySelector('.masthead-subheading');
    const heading = document.querySelector('.masthead-heading');
    const btn = document.querySelector('.animbtn');

    // Function to add 'visible' class to elements
    function makeVisible(element, delay) {
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
    }

    // Apply animation with delay
    makeVisible(subheading, 500); // 0.5 seconds delay
    makeVisible(heading, 1000); // 1 second delay
    makeVisible(btn, 1500);
});