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

$('.menu-btns').click(function(){

    $(this).addClass('active');
    $(this).siblings('.menu-btns').removeClass('active');
    var id = $(this).attr('id');
    $(this).parent().siblings('.skill-cont').each(function(){
    if($(this).attr('id') == id)
    {
      $(this).removeClass('d-none');
      $(this).addClass('d-inline-flex');
      $(this).siblings('.skill-cont').addClass('d-none');
      $(this).siblings('.skill-cont').removeClass('d-inline-flex');
    }
    })
  
});



// $('.carousel').carousel();



