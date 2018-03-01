$(document).ready(
    $('.slicky').slick({
        dots: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
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
