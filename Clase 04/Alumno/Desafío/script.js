var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var nombreIngresado = prompt ('Cuál es tu nombre?');

function buscarAlumno(texto,alumnos) {
  
  let posicion= -1;
  
  for (let i = 0; i < alumnos.length; i++) {
    
    let alumno = alumnos[i];
   if (alumno.firstName===texto || alumno.lastName===texto) {
     posicion = i;
     break
   } 
  }
  return posicion
}

console.log(buscarAlumno(nombreIngresado, studentsList));