var email = $('#email');

email.blur(function validarEmail (event) {
  let input = $(this) //event.target

  if (input.val().indexOf('@') >= 0 &&
      
      input.val().indexOf('.') >= 0 &&
      
      input.val().length > 0
      ) {input.removeClass('is-invalid')
         input.addClass ('is-valid'); 

    //console.log('Es un formato correcto')   
  }

  else{
    
    input.addClass ('is-invalid');
    
  //console.log('Es un formato incorrecto')
  }
  
})



  
