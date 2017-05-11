$(document).ready(function(){
  // $(".content-link").hover(function(){
  //   var box = $(this).children('.box-content');
  //   $(this).parent().toggleClass('js-hide-border');
  //   // $(box).children('.box-header').children('hr').toggleClass('js-hide-accent');
  //   $(box).children('.box-header').toggleClass('js-hide-accent').toggleClass('js-font-change');
  //   $(this).toggleClass('js-hover-content');
  //   $('.box4').toggleClass('js-skills-hover');
  //   $(box).children('.box-header').toggleClass('js-add-projAccent').slideDown('slow');
  // });

  $('.skill-link').hover(function(){
      var box = $(this).children('.box-content');
      $(this).parent().toggleClass('js-hide-border');
      // $(box).children('.box-header').children('hr').toggleClass('js-hide-accent');
      $(box).children('.box-header').toggleClass('js-hide-accent').toggleClass('js-font-change');
      $(this).toggleClass('js-hover-content');
      $('.box4').toggleClass('js-skills-hover');
      $(box).children('.box-header').toggleClass('js-add-skillAccent').slideDown('slow');
  });

  $('.projects-link').hover(function(){
    var box = $(this).children('.box-content');
    $(this).parent().toggleClass('js-hide-border');
    // $(box).children('.box-header').children('hr').toggleClass('js-hide-accent');
    $(box).children('.box-header').toggleClass('js-hide-accent').toggleClass('js-font-change');
    $(this).toggleClass('js-hover-content');
    $('.box4').toggleClass('js-skills-hover');
    $(box).children('.box-header').toggleClass('js-add-projAccent').slideDown('slow');
  });

  $('.resume-link').hover(function(){
    var box = $(this).children('.box-content');
    $(this).parent().toggleClass('js-hide-border');
    // $(box).children('.box-header').children('hr').toggleClass('js-hide-accent');
    $(box).children('.box-header').toggleClass('js-hide-accent').toggleClass('js-font-change');
    $(this).toggleClass('js-hover-content');
    $('.box4').toggleClass('js-skills-hover');
    $(box).children('.box-header').toggleClass('js-add-resAccent').slideDown('slow');
  });

  $(".icons a").hover(function(){
    $(this).toggleClass('js-hover-icon');
  });

  $('.main-nav p').hover(function(){
    $(this).toggleClass('js-hover-nav');
  });


});
