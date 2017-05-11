$(document).ready(function(){
  $('.main-nav p').hover(function(){
    // $(this).toggleClass('js-hover-nav');
  });



  $('span#details1').click(function(){
    // $('.project-desc div:nth-child(5)').hide();
    $('.project1').toggle();
    $('.project2').hide();
    $('.display-container2').hide();
    $('.display-container1, .display-container1 button').show();

  });

  $('span#details2').click(function(){
    // $('.project-desc :nth-child(6)').hide();
    $('.project2').toggle();
    $('.project1').hide();
    // $('.display-container1, .display-container1 button').hide();
    $('.display-container1').hide();
    $('.display-container2, .display-container2 button').show();
  });
});
