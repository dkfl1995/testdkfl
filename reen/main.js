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

//input-search animation

var searchFor = document.getElementsByName('searchFor')[0];
var submitBtn = document.getElementsByName('submitSearch')[0];
var submitIco = document.getElementsByName('submitSearchIco')[0];
submitBtn.style.display = 'none';

function hasClass(element, cls){
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

submitIco.addEventListener('click', function (e){
    if (searchFor.classList.contains('search-anim') === false){
        searchFor.classList.add('search-anim');
        searchFor.style.visibility = 'visible';
        searchFor.focus();
        submitBtn.style.display = 'block';
        console.log(searchFor.classList);
    }  else {
        console.log(e.target);
    }
});

document.body.addEventListener('click', function (e) {
    if(e.target !== submitBtn && e.target !== searchFor && searchFor.classList.contains('search-anim') === true){
        searchFor.classList.remove('search-anim');
        searchFor.style.visibility = 'hidden';
        submitBtn.style.display = 'none';
        console.log(e.target);
    } else {
        console.log('SMTH WRONG');
    }
});

$('.prev').on('click', function(){
    $('.slicky').slick('slickPrev');
});
$('.next').on('click', function(){
    $('.slicky').slick('slickNext');
});





