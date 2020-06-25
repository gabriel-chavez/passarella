$(document).ready(function($) {

    $(window).scroll(function() {
        $scrol = $(document).scrollTop();
        console.log($scrol);
        if ($scrol > 60) {
            $('.navbar').addClass('shrink');
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('shrink');
        }
    });

    /********************************************\
                One Nice Scrolling NaveBar 
    \********************************************/

    // var swiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     slidesPerView: 3,
    //     slidesPerColumn: 1,
    //     paginationClickable: true,
    //     spaceBetween: 35,
    //     breakpoints: {
    //         1024: {
    //             slidesPerView: 8,
    //             spaceBetween: 15
    //         },
    //         768: {
    //             slidesPerView: 8,
    //             spaceBetween: 30
    //         },
    //         640: {
    //             slidesPerView: 1.5,
    //             spaceBetween: 10,
    //         },
    //         420: {
    //             slidesPerView: 1.1,
    //             spaceBetween: 10,
    //         }
    //     }
    // });

});

var TIMEOUT = 6000;

var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

    var $radios = $('input[class*="slide-radio"]');
    var $activeRadio = $('input[class*="slide-radio"]:checked');

    var currentIndex = $activeRadio.index();
    var radiosLength = $radios.length;

    $radios
        .attr('checked', false);

    if (currentIndex >= radiosLength - 1) {

        $radios
            .first()
            .attr('checked', true);

    } else {

        $activeRadio
            .next('input[class*="slide-radio"]')
            .attr('checked', true);

    }

}