
$(function () {


  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  })
}, 0);

$('.burger').on('click', function (e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('burger--open')
})

$(".header__nav-list a, .logo a").on("click", function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 1000)
  $('.header__top').removeClass('header__top--open')
  $('.overlay').removeClass('overlay--show')
  $('.burger').removeClass('burger--open')
})

