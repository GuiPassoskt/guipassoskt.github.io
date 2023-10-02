/* =================================================

 Template Name:  Saffron - multipurpose html template
 Author: MouriTheme
 Version: 1.0
 Design and Developed by: MouriTheme

 NB: This is the main js of this theme.

 =================================================== */

(function($) {
    'use strict';

    jQuery(document).ready(function($) {

        //************** counter js

        // countUp
        $('.count').countUp({
            delay: 10,
            time: 1500
        });

        //*********** scrollspy js

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        //************ smooth scroll js

        $('a.smooth-menu,a.my-btn-1').on("click", function(e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });

        //********** menu hides after click (mobile menu)

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });


        //************ Magnific Popup

        $('.video-play').magnificPopup({
            type: 'video',
        });

        $('.zoom1').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find('img');
                }
            }
        });

        //************ Services Carousel

        $("#services-carousel").owlCarousel({
            navigation: false,
            pagination: true,
            slideSpeed: 800,
            paginationSpeed: 800,
            smartSpeed: 500,
            autoplay: true,
            singleItem: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                680: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        //************ Testimonial Carousel


        $("#testimonial-carousel").owlCarousel({
            navigation: false,
            pagination: true,
            slideSpeed: 800,
            paginationSpeed: 800,
            smartSpeed: 500,
            autoplay: true,
            singleItem: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                680: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        //***** Skill bar js

        var skillbar = $(".skillbar");

        skillbar.waypoint(function() {
            skillbar.each(function() {
                $(this).find(".skillbar-child").animate({
                    width: $(this).data("percent")
                }, 1000);
            });
        }, {
            offset: "80%"
        });

        //************ About Carousel

        var $testCarousel = $('#about-carousel');
        if ($testCarousel.length > 0) {
            $testCarousel.owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                autoplay: true,
                dots: false,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    1170: {
                        items: 1
                    }
                }
            });
        }

        //************ Client Carousel

        var $clientCarousel = $('#client-carousel');
        if ($clientCarousel.length > 0) {
            $clientCarousel.owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                autoplay: true,
                dots: false,
                autoplayTimeout: 2500,
                smartSpeed: 250,
                responsive: {
                    0: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    1170: {
                        items: 5
                    }
                }
            });
        }

        //*************** Isotope filter

        var $Container = $('#img-filter');
        if ($Container.length > 0) {
            $Container.isotope({
                itemSelector: '.single-port',
                transitionDuration: '0.8s'
            });
            $(".img-filter").on("click", function(e) {
                $(".img-filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $Container.isotope({
                    filter: selector
                });
                return false;
            });

            $(window).resize(function() {
                setTimeout(function() {
                    $Container.isotope();
                }, 1000);
            }).trigger('resize');
        }


    });



    //********** menu background color change while scroll

    $(window).on('scroll', function() {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });


    //********* page loader js

    setTimeout(function() {
        $('.loader_bg').fadeToggle();
    }, 1500);



})(jQuery);