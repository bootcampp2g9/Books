jQuery(document).ready(function($) {
    if($('.books').length){
      var books = $('.books');
      books.find('.filter ul a').on('click', function(e){
        e.preventDefault();                             
        $(this).toggleClass('active'); 
        books.find('.book').addClass('hidden'); 
        
        books.find('.filter ul a.active').each( 
            function(){
                var selector = $(this).attr('data-filter');
                books.find(selector).removeClass('hidden'); 
            }
        );        
      });
    }
  });