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

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
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


if(window.history.replaceState){
    window.history.replaceState(null, null, window.location.href);
  };

document.getElementById('btn-hover color-5').addEventListener('click', function() {
    document.getElementById('popup-form').style.display = 'flex';
});

function closeForm() {
    document.getElementById('popup-form').style.display = 'none';
}

/*  * mofes correction for js */

function openForm() {
    document.getElementById('popup-form').style.display = 'flex';
}
function closeForm() {
    document.getElementById('popup-form').style.display = 'none';
}
function checkAge() {
    var age = document.getElementById('age').value;
    if (age < 18) {
        alert('You need to fill a consent form(Less than 18). You will be redirected to the consent form page.');
        window.location.href = './assets/LP35 SUMMER CAMP CONSENT FORM 24.pdf';
        console.log("You are young!")
        return false;
    }
    return true;
}