$(document).ready(function(){
  $('.js-menu').hide();

  console.log("Está listo el HTML");

  $('.js-show-make').click(function(){
    $('.page').addClass('make');
  })

  $('.js-show-recipe').click(function(){
    $('.page').removeClass('make');
  })
})