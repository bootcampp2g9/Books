{/* <div class="books">
  <div class="filter"> 
    <ul>
      <li><a class="" data-filter=".classic" href="#">Classic</a></li>
    </ul>
  </div>

  <ul class="library">
    <li class="book classic">Classic</li>
  </ul>
</div>

if($('.books').length){
    var books = $('.books');
    books.find('.filter ul a').on('click', function(){
      books.find('.filter ul a').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      books.find('.book').addClass('hidden');
      books.find(selector).removeClass('hidden');
      return false;
    });
}

jQuery(document).ready(function($) {
    if($('.books').length){
      var books = $('.books');
  
      books.find('.filter ul a').on('click', function(e){
        e.preventDefault(); 
        books.find('.filter ul a.all').removeClass('active');
        $(this).toggleClass('active');                              
        books.find('.book').addClass('hidden');                  
  
        books.find('.filter ul a.active').each(                   
          function(){
            var selector = $(this).attr('data-filter');       
            books.find(selector).removeClass('hidden');      
          }
        );        
      });
  
      books.find('.filter ul a.all').on('click', function(e){
        e.preventDefault();                                       
        books.find('.filter ul a').removeClass('active');
        books.find('.book').removeClass("hidden");  
        $(this).toggleClass('active');                             
      }); 
    }
  }); */}

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