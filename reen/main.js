
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
var submitIcon = document.getElementsByName('submitSearch')[0];

// searchFor.style.visibility = 'visible';

function hasClass(element, cls){
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

submitIcon.addEventListener('click', function (e){
    if (searchFor.classList.contains('search-anim')){
        searchFor.className.replace(/(?:^|\s)search-anim(?!\S)/, '');
        searchFor.style.visibility = 'hidden';
        console.log('nope');
    } else {
        searchFor.className += ' search-anim';
        searchFor.style.visibility = 'visible';
        searchFor.focus();
        console.log(searchFor.className);
    }
});

// if(searchFor.classList !== 0){
    // submitIcon.addEventListener('click', function (e){
    //     searchFor.className.replace(/(?:^|\s)search-anim(?!\S)/, '');
    //     searchFor.style.visibility = 'hidden';
    //     console.log(e, searchFor.classList);
    // });
// }

$('.prev').on('click', function(){
    $('.slicky').slick('slickPrev');
});
$('.next').on('click', function(){
    $('.slicky').slick('slickNext');
});





