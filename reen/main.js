//SLICKJS carousel init
$(document).ready(function () {
      
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
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });
});

//input-search animation
var search = document.getElementsByClassName('search')[0];
var searchFor = document.getElementsByName('searchFor')[0];
var submitBtn = document.getElementsByName('submitSearch')[0];
var submitIco = document.getElementsByName('submitSearchIco')[0];
submitBtn.style.display = 'none';

$(document).on('click', function (event){
    
    if ($(event.target).parents('.search').length >= 1 && !$('[name="searchFor"]').hasClass('search-anim') && $(event.target).hasClass('deco-button')){

        $('[name="searchFor"]').addClass('search-anim');
        searchFor.style.visibility = 'visible';
        searchFor.focus();
        submitBtn.style.display = 'block';
        submitIco.style.display = 'none';
        console.log($(event.target).parents('.search').length);
            

    } else if($(event.target).parents('.search').length < 1){
        $('[name="searchFor"]').removeClass('search-anim');
        searchFor.style.visibility = 'hidden';
        submitBtn.style.display = 'none';
        submitIco.style.display = 'block';
        console.log($(event.target).parents('.search').length);
    } else if($(event.target).hasClass('subm-button')){
        console.log('send data');
    }
});

$('.prev').on('click', function(){
    $('.slicky').slick('slickPrev');
});
$('.next').on('click', function(){
    $('.slicky').slick('slickNext');
});



$(document).ready(function() {
    var ev = $('header');    
	var pos = ev.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top ) {
			ev.addClass("stick");
		} else {
            ev.removeClass("stick");	
		}
	});
});


// $(window).on('scroll', function() {
//     console.log($('header').scrollTop());
//     if($('header').scrollTop() === 0){
//         $('header').addClass('transform-header');
//     }
// }); 

