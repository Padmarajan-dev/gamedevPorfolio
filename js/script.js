$(function(){
  $('.circlechart').circlechart();
});

$('.view-more').click(function()
{
  $(this).siblings('.card-body').removeClass('d-none');
  $(this).addClass('d-none');
  $(this).next('.less').removeClass('d-none');
});

$('.less').click(function()
{
  $(this).siblings('.card-body').addClass('d-none');
  $(this).addClass('d-none');
  $(this).prev('.view-more').removeClass('d-none');
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})



