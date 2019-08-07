$(window).scroll(function() {

    var distance = $('.marker').offset().top - $(window).scrollTop();
  
    
     if (distance <= 0) {
       $('.sidebar h2').addClass('is-sticky')
     } else {
       $('.sidebar h2').removeClass('is-sticky')
     }
                   
    
    
    })