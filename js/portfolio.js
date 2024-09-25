(function ($) {
    "use strict";

    $(document).ready(function () {
        $('.navbar').fadeIn('slow').css('display', 'flex');

        // Scroll to about button
        $('.scroll-to-about').click(function () {
            $('html, body').animate({
                scrollTop: $('#about').offset().top - 50
            }, 1500, 'easeInOutExpo');
        });
        
    }); 

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

    // Back to top button
    var backToTopButton = $('.back-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            backToTopButton.fadeIn('slow');
        } else {
            backToTopButton.fadeOut('slow');
        }
    });
    backToTopButton.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);
