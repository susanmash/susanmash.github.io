$(document).ready(function(){
  $('.main-nav a').hover(function(){
    $(this).toggleClass('js-hover-nav');
  });

  $('.btnA').click(function(){
    $('.project-desc div:nth-child(4)').hide();
    $('.project-desc div:nth-child(5)').hide();
    $('.project-desc :nth-child(3)').toggle();
    $('.project-desc :nth-child(6)').toggle();
    $('.display-container2, .display-container2 button').hide();
    $('.display-container1, .display-container1 button').toggle();

  });

  $('.btnB').click(function(){
    $('.project-desc :nth-child(3)').hide();
    $('.project-desc :nth-child(6)').hide();
    $('.project-desc div:nth-child(4)').toggle();
    $('.project-desc div:nth-child(5)').toggle();
    $('.display-container1, .display-container1 button').hide();
    $('.display-container2, .display-container2 button').toggle();
  });
});
