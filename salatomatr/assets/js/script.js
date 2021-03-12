window.onload = function(){
  const menu = document.querySelector('.header')
  window.onscroll = (event) => {
    if(document.documentElement.scrollTop > 200){
      menu.classList.add('header--active')
    }else{
      menu.classList.remove('header--active')
      
    }
  } 
  // fetch form
  const forms = $('.leedForm')
  forms.submit(function(e){
    e.preventDefault()
    let data = $(this).serialize()
    console.log(data)
    $.ajax({
      url: './mail.php',
      method: 'POST',
      data: data,
      success: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  })
    
  
  
}
