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
   showAndHideContent(this,'.menu-btns','.skill-cont');
});

$('.portfolio-menu-btns').click(function(){
  showAndHideContent(this,'.portfolio-menu-btns','.portfolio-cont');
});

    function showAndHideContent(elem,btnname,sibling)
    {
      $(elem).addClass('active');
      $(elem).siblings(btnname).removeClass('active');
      var id = $(elem).attr('id');
      if(sibling == '.skill-cont')
      {
        var elems = $(elem).parent().siblings(sibling);
      }else 
      {
        var elems = $(elem).parent().parent().siblings(sibling);
      }

      elems.each(function(){
        
      if($(this).attr('id') == id)
      {
        $(this).removeClass('d-none');
        $(this).addClass('d-inline-flex');
        $(this).siblings(sibling).addClass('d-none');
        $(this).siblings(sibling).removeClass('d-inline-flex');
      }
    });
  }
  




// $('.carousel').carousel();



