var vid = document.getElementById('video'); 
var menu = document.querySelector(".header-page");
var btnOpen = document.querySelector(".main-nav__toggle");
var scrolling = document.querySelector('.scroll-bar');
window.onload = function(){
	menu.classList.remove('main-nav--opened');
  if(window.innerWidth < 1200){
   vid.preload = "none"; 
  }
};
btnOpen.addEventListener('click', function(event){
	event.preventDefault();	
	menu.classList.toggle('main-nav--opened');
});
window.addEventListener('scroll', function(){
   if (pageYOffset > 1) { 
   	   scrolling.classList.add('scroll');
   }; 
   if( pageYOffset == 0 ){
   	  scrolling.classList.remove('scroll');
   };
});
vid.addEventListener('mouseenter', function() {
  vid.play();
});

vid.addEventListener('mouseleave', function() {
  vid.pause();
});
$(function(){
  $('.slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  cssEase: 'ease-in'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-main',
  focusOnSelect: true
});
});

$(function(){
  $('.main-photo__reviews-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  dots: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false,
      }
    }      
  ]
});
});
