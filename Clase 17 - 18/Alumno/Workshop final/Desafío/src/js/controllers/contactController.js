function contactController() {
  console.log('Se cargo el formulario de contacto');
}

var email = $('#email')

var nombre = $('#nombre')


nombre.onkeyup = validarNombre;
email.onkeyup = validarEmail;


function validarEmail(event){
  
  var input =  event.target

  if (input.value.indexOf('@') >= 0 &&
      input.value.indexOf('.') >= 0
      ) {
    
      input.className = 'form-control is-valid'; 
    console.log('Es un formato correcto')   
  }
  else{
    input.className = 'form-control is-invalid';
    console.log('Es un formato incorrecto')
  }
  
}


function validarNombre(event){
  
  var input =  event.target

if (input.value.length > 0) {

  input.className = 'form-control is-valid'; 
  console.log ('Es un formato correcto')
 }
 else{
  input.className = 'form-control is-invalid';
  console.log('Es un formato incorrecto')
}
}
export default contactController;
