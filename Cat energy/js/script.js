var btn = document.querySelector('.logo-wrapper__toggle');
var toggled = document.querySelector('.main-nav');
btn.addEventListener('click', function(){
	toggled.classList.toggle('main-nav--opened');
});
window.onload = function(){
  toggled.classList.remove('main-nav--opened');
  document.getElementById('iframe').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6037872533248!2d30.32085871635935!3d59.93871648187619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1579642474724!5m2!1sru!2sru";
}
