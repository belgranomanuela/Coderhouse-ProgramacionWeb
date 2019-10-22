
var firstName = document.getElementById('firstName')

firstName.onblur = showMessage;

function showMessage(event){
  
  var input =  event.target

  if (input.value === '') {
    input.className = 'form-control is-invalid';    
  }
  else{
    input.className = 'form-control is-valid';
  }
  console.log('El usuario perdió foco y el input tiene el valor ' + input.value)
}
