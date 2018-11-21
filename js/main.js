$(function(){

  var $window = $(window);



  var lastScrollTop = $window.scrollTop();

  function scrollStuff() {

      var scrollTop = $window.scrollTop();
      var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');
      var bottom    = $window.height() + scrollTop == $(document).height();

      if( y == 'down' && scrollTop > 70 ){

          $('header').addClass('hide');
          //$('.sub-menu--js').slideUp('fast');

      } else{

          $('header').removeClass('hide');

      }
      lastScrollTop = scrollTop;

  }
  scrollStuff();

  $window.on('scroll', scrollStuff);



  $('.hero-slides').slick({
      autoplay:true,
      autoplaySpeed:6000,
      infinite:true,
      dots:true,
      slidesToShow:1,
      slidesToScroll:1,
      speed: 500,
      pauseOnHover:false,
      pauseOnFocus:false,
      fade: true,
      nextArrow: $('.slider-next-btn'),
      prevArrow: $('.slider-prev-btn')
  });


  $('.has-sub-menu').on('mouseenter', function(){

    $(this).find('.sub-menu').addClass('active');

  });
  $('.has-sub-menu').on('mouseleave', function(){

    $(this).find('.sub-menu').removeClass('active');

  });
   

});







