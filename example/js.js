var person = document.querySelectorAll(".person");
console.log(person);


[].forEach.call(person,function(el){
    el.addEventListener('mouseenter', function () {
    	el.classList.add('overlay-show');
    });
    el.addEventListener('mouseleave', function(){
  		el.classList.remove('overlay-show');
   	});
});