var email = $('#email');
var nombre = $('#nombre');
var comentarios = $('#comentarios');
var enviarBtn = $('#submitButton');

enviarBtn.attr('disabled', true);


email.keyup(function validarEmail () {
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
  }
  habilitarBoton()
})

nombre.keyup(function validarNombre() {
  let input = $(this);

  if (input.val().length > 0){
     input.removeClass('is-invalid')
     input.addClass ('is-valid');  
  }
  else{
    input.removeClass('is-valid')
     input.addClass ('is-invalid');  
  }
  habilitarBoton()
})

comentarios.keyup(function validarComentarios() {

  let input = $(this);

  if (input.val().length > 0){
    input.addClass ('is-valid'); 
     input.removeClass('is-invalid')
  }
  else{
    input.removeClass('is-valid')
     input.addClass ('is-invalid');  
  }
  habilitarBoton()
})

function habilitarBoton() {
  let deshabilitado = true;
  if (
    !nombre.hasClass('is-invalid') &&
    !email.hasClass('is-invalid') &&
    !comentarios.hasClass('is-invalid')
  ) {
    deshabilitado = false;
  }
  enviarBtn.attr('disabled', deshabilitado);
 }
 


