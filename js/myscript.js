$(document).ready(function () {

    $(".nav-link").on("click", function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Zoom Image
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // //------- fixed navbar --------//  
    $(window).scroll(function () {
        var sticky = $('.navbar'),
            scroll = $(window).scrollTop();

        if (scroll > 50) sticky.addClass('color');
        else sticky.removeClass('color');
    });



    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        item: 3,
        itemsMobile: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3,
                loop: true
            }
        }
    });
});