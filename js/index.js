$(document).ready(function(){

    $('.project-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
      });

    $(".project-carousel").on('change', function() {
        $("#project-name").text($(".slick-current").data("name") );
        $("#project-description").text($(".slick-current").data("description") );
    });

    $('.project-carousel').on('afterChange',function( currentSlide ) {
        $("#project-name").text($(".slick-current").data("name") );
        $("#project-description").text($(".slick-current").data("description") );
      });
});