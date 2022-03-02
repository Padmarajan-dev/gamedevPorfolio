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

// $('.carousel').carousel();



