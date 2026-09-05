/*
 * @k-yasugi 2016
 * */
//アンカーリンクのスクロール

$(function(){
  $('a[href^="#"]').on('click', function(e){
    var href = $(this).attr("href");
    var target = $(href === "#"? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({
      scrollTop: position,
    }, {
      duration: 600,
      easing: 'easeOutQuart'
    });
    return false;
  });
});
