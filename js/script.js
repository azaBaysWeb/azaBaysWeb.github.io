$(document).ready(function(){
    // плавный скроллинг страницы
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top - 0;

        $('body, html').animate({scrollTop: bl_top}, 1500);
    });
        
    $(window).scroll(function(event){
        var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(windowScroll != 0){
            $('.nav').css({
                'position': 'fixed',
                'background-color': '#c0301c',
                'padding': '20px 0',
            });
        }else{
            $('.nav').css({
                'position': '',
                'background-color': '',
                'padding': '',
            });
        }
    });
    // end плавный скроллинг страницы

    // слайдер
    $('.about_team').slick({
        infinite: true,
        slidesToShow: 4,
        nextArrow: '<div class="arrows arrow-right"><i class="fas fa-chevron-right"></i></div>',
        prevArrow: '<div class="arrows arrow-left"><i class="fas fa-chevron-left"></i></div>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '160px',
                }
            }
        ],
    });
    // end слайдер

    // portfolio
    $('.block-title_filter__list-item').click(function(){
        var data = $(this).attr('data-filter');

        $('.block-title_filter__list-item').removeClass('filter-item-active');

        $(this).addClass('filter-item-active');

        if($(this).attr('data-filter') != 'all'){
           
            $.each($('.work'), function(key, value){
                
                if($(value).attr('data-filter') != data){
                    $(value).hide();
                }
                else{
                    $(value).show();
                }

           });

        }else{
            $('.work').show();
        }
    });
    // end portfolio
});