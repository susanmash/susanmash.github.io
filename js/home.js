$(document).ready(function(){
  $(".content-link").hover(function(){
    var box = $(this).children('.box-content');
    $(box).children('.box-header').children('hr').toggleClass('js-hide-accent');
    $(this).toggleClass('js-hover-content').toggleClass('js-font-change');

  });

  $(".icons a").hover(function(){
    $(this).toggleClass('js-hover-icon');
  });

  $('.main-nav a').hover(function(){
    $(this).toggleClass('js-hover-nav');
  });

  
});
