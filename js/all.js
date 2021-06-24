$(document).ready(function(){
  $('.droplist').click(function(event){
      event.preventDefault();
      $(this).parent().find('ul').slideToggle(500);
      $(this).addClass('active').parent().siblings().find('a').removeClass('active')
      $(this).addClass('active').parent().siblings().find('ul').slideUp(500)
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 1500,
    autoplay: {
        delay:5000,
    },
    effect: 'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'positionFromTop': 280
  })
  $('.top').click(function(event){
    event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 800);
  })
});