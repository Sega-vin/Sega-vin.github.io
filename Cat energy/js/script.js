var btn = document.querySelector('.logo-wrapper__toggle');
var toggled = document.querySelector('.main-nav');
btn.addEventListener('click', function(){
	toggled.classList.toggle('main-nav--opened');
});
window.onload = function(){
  toggled.classList.remove('main-nav--opened');
  document.getElementById('iframe').src = 'https://vk.com/away.php?utf=1&to=https%3A%2F%2Fwww.google.com%2Fmaps%2Fembed%3Fpb%3D!1m16!1m12!1m3!1d23082.58473894339!2d40.20969743940372!3d43.68304601368505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LrRgNCw0YHQvdCw0Y8g0L_QvtC70Y_QvdCwINC-0YLQtdC70Lg!5e0!3m2!1sru!2sru!4v1579642136158!5m2!1sru!2sru';
}
