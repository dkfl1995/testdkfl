
    // var prev = document.createElement('button');
    // prev.className = 'prev';
    // prev.innerHTML = 'prev';
    // var next = document.createElement('button');
    // next.innerHTML = 'next';
    // next.className = 'next';
    // this.console.log(prev);

$(document).ready(
    $('.slicky').slick({
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
                infinite: true,

            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
                infinite: true,
                
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    })
);

var searchFor = document.getElementsByName('searchFor')[0];
console.log(searchFor);


document.getElementsByName('submitSearch')[0].addEventListener('click', function (e){
    searchFor.classList.add('searchFor-anim');
});

document.getElementsByName('submitSearch')[0].addEventListener('click', function (e){
    searchFor.classList.remove('searchFor-anim');
});

$('.prev').on('click', function(){
    $('.slicky').slick('slickPrev');
});
$('.next').on('click', function(){
    $('.slicky').slick('slickNext');
});





