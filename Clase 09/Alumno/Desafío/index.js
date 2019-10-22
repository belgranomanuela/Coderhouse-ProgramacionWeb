
var email = document.getElementById('email')

email.onblur = showMessage;

function showMessage(event){
  
  var input =  event.target

  if (input.value.indexOf('@') >= 0 ||
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

