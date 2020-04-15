$(function(){


/*Tabs on main page*/
$('.catalog__auto').not(":first").hide();
$('.catalog__tabs .button').click(function(){
	$(".catalog__tabs .button").removeClass("catalog__tabs--active").eq($(this).index()).addClass("catalog__tabs--active");
	$('.catalog__auto').hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("catalog__tabs--active");


/*Main menu*/
$('.social-wrapper__btn-wrapper').click(function(){
	$('.header-nav').addClass('header-nav--open');
	$('.Popap-overlay').addClass('Popap-overlay--active');
});
$('.header-nav__item-btn').click(function(){
	$('.header-nav').removeClass('header-nav--open');
	$('.Popap-overlay').removeClass('Popap-overlay--active');
});
$('.Popap-overlay').click(function(){
	$('.header-nav').removeClass('header-nav--open');
	$('.Popap-overlay').removeClass('Popap-overlay--active');
});

});