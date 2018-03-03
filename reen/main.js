$(document).ready(
    $('.slicky').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: '<li><button type="button" class="slick-prev">Previous</button></li>',
        nextArrow: '<li><button type="button" class="slick-next">Next</button></li>',
        speed: 1000,
        responsive: [
            {
                breakpoint:1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: false
                }
            },
            {
                breakpooint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    })
);
