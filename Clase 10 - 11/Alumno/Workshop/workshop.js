var listaAlumnos = [];

var nombre = document.getElementById('nombre')

var dni = document.getElementById('dni')

var email = document.getElementById('email')

var apellido = document.getElementById('apellido')

var btnAgregar = document.getElementById('btn-add')

var btnEliminar = document.getElementById('btn-delete')

var dniAEliminar = document.getElementById('dni-eliminar')

var buscarNombreAlumno = document.getElementById ('buscarAlumno');

var btnBuscar = document.getElementById('btn-buscar')



nombre.onblur = validarNombre;

btnAgregar.onclick = agregarAlumno;

dni.onblur = validarDni;

btnEliminar.onclick = eliminarAlumno;

email.onblur = validarEmail;

apellido.onblur = validarApellido;

btnBuscar.onclick = buscarAlumno;


function agregarAlumno(event) {

  if (nombre.className === 'form-control is-invalid' 
  || apellido.className === 'form-control is-invalid' || dni.className === 'form-control is-invalid' 
  || email.className === 'form-control is-invalid') {
    return 
  }
  var nuevoAlumno = {
    nombre: nombre.value,
    dni: dni.value,
    apellido: apellido.value,
    email: email.value,  

    
  }
  
  listaAlumnos.push(nuevoAlumno);
  var  stringifiedAlumno = JSON.stringify(listaAlumnos)

  localStorage.setItem('Alumno', stringifiedAlumno);

  console.log(listaAlumnos)

  var bodyTable = document.getElementById('bodyTable')
  var tr = document.createElement('tr');
  tr.id = dni.value;

  var tdNombre = document.createElement('td');
  tdNombre.innerHTML = nombre.value;
  tr.appendChild(tdNombre);

  var tdApellido = document.createElement('td');
  tdApellido.innerHTML = apellido.value;
  tr.appendChild(tdApellido);

  var tdDni = document.createElement('td');
  tdDni.innerHTML = dni.value;
  tr.appendChild(tdDni);

  var tdEmail = document.createElement('td');
  tdEmail.innerHTML = email.value ;
  tr.appendChild(tdEmail);

  bodyTable.appendChild(tr);
  
  nombre.value = '';
  apellido.value = '';
  dni.value = '';
  email.value = '';

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

function validarApellido(event) {
 
  var input = event.target

  if(input.value.length > 0){
    input.className = 'form-control is-valid';
    console.log('Es un formato correcto');
  }
  else{
    input.className = 'form-control is-invalid';
    console.log('Es un formato incorrecto')
  }
}

function validarDni(event) {
  var value = parseInt(event.target.value)
  if (Number.isNaN(value) || value === 0 || existeDniEnListaDeAlumnos(value)) {
    event.target.className = 'form-control is-invalid';
  }
  else {
    event.target.className = 'form-control is-valid';
  }
}

function existeDniEnListaDeAlumnos(dniParam) {
  if (listaAlumnos.length === 0) return false;

  for (let i = 0; i < listaAlumnos.length; i++) {
    let alumno = listaAlumnos[i];
    if (alumno.dni === dniParam.toString()) {
      return true 
    }
  }
  return false 
}


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

function eliminarAlumno(event) {
  var eliminarAlumno = document.getElementById(dniAEliminar.value);
  console.log(eliminarAlumno)
  eliminarAlumno.parentNode.removeChild(eliminarAlumno);

 var posicionAEliminar;

   for (let i = 0; i < listaAlumnos.length; i++) {
     var eliminarAlumno = listaAlumnos[i];
    if (alumno.nombre === dniAEliminar.value) {
      posicionAEliminar = i;

    }
   }

   listaAlumnos.splice(posicionAEliminar,1)
   localStorage.setItem('Alumno', JSON.stringify(listaAlumnos));
    console.log(listaAlumnos)
  }

  

  function buscarAlumno (event) {

    for (let i = 0; i < listaAlumnos.length; i++) {
      var alumno = listaAlumnos[i];
     if (alumno.nombre === buscarNombreAlumno.value) {

 
       var alumnobuscado = document.getElementById('printScreenAlumno')
       
       var h1Nombre = document.createElement('h1');
           h1Nombre.innerHTML = alumno.nombre;
           alumnobuscado.appendChild(h1Nombre);
 
       var h2Apellido = document.createElement('h2');
           h2Apellido.innerHTML = alumno.apellido;
           alumnobuscado.appendChild(h2Apellido);
 
       var h3dni = document.createElement('h3');
           h3dni.innerHTML = alumno.dni;
           alumnobuscado.appendChild(h3dni);
 
       var h4email = document.createElement('h4');
           h4email.innerHTML = alumno.email;
           alumnobuscado.appendChild(h4email);
     }
    }
    nombre.value = '';
  apellido.value = '';
  dni.value = '';
  email.value = '';
 }
 

