var btn = document.querySelector('.logo-wrapper__toggle');
var toggled = document.querySelector('.main-nav');
btn.addEventListener('click', function(){
	toggled.classList.toggle('main-nav--opened');
});
window.onload = function(){
  toggled.classList.remove('main-nav--opened');
}
