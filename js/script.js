$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 7,
        center: true,
        loop: true,
        autoWidth: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 1700,
    });
});

$('body').scrollspy({ target: '#navbarNav' })
