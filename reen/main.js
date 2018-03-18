//SLICKJS carousel init

    // var prev = document.createElement('button');
    // prev.className = 'prev';
    // prev.innerHTML = 'prev';
    // var next = document.createElement('button');
    // next.innerHTML = 'next';
    // next.className = 'next';
    // this.console.log(prev);

$(document).ready(
    $('.slicky').slick({
        arrows: true,
        prevArrow: '<div class="slick-prev"><div class="line"></div><div class="line"></div></div>',
        nextArrow: '<div class="slick-next"><div class="line"></div><div class="line"></div></div>',
        appendArrows: $('.custom-arr'),
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

//input-search animation
var search = document.getElementsByClassName('search')[0];
var searchFor = document.getElementsByName('searchFor')[0];
var submitBtn = document.getElementsByName('submitSearch')[0];
var submitIco = document.getElementsByName('submitSearchIco')[0];
submitBtn.style.display = 'none';

// function hasClass(element, cls){
//     return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
// }

$('body').on('click', function (event){
    console.log($(this).parentsUntil('.search'));
    if (!$('[name="searchFor"]').hasClass('search-anim') && $(event.target).hasClass('.deco-button') || $(event.target).is('img')){
        // console.log($(event.target) , 'has class deco-button' +  $(this).hasClass('deco-button'));
        // if(){
            $('[name="searchFor"]').addClass('search-anim');
            searchFor.style.visibility = 'visible';
            searchFor.focus();
            submitBtn.style.display = 'block';
            submitIco.style.display = 'none';
            console.log($(event.target).hasClass('.deco-button') || $(event.target).is('img'));
            
        // }
    } else if($('[name="searchFor"]').hasClass('search-anim') && !$(this).parentsUntil('.search')) {
        $('[name="searchFor"]').removeClass('search-anim');
        searchFor.style.visibility = 'hidden';
        submitBtn.style.display = 'none';
        submitIco.style.display = 'block';
        console.log($('[name="searchFor"]').hasClass('search-anim') && $(event.target).parentsUntil('.search'));
    } else {
        console.log('nothing');
    }
});

// document.body.addEventListener('click', function (e) {
//     if(e.target !== submitIco && e.target !== submitBtn && searchFor.classList.contains('search-anim') === true){
//         searchFor.classList.remove('search-anim');
//         searchFor.style.visibility = 'hidden';
//         submitBtn.style.display = 'none';
//         console.log(e.target);
//     } else {
//         console.log('SMTH WRONG');
//     }
// });

$('.prev').on('click', function(){
    $('.slicky').slick('slickPrev');
});
$('.next').on('click', function(){
    $('.slicky').slick('slickNext');
});





