
var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode(studentParam) {
  //studentParam.firstName
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.id = studentParam.dni;

  var h1 = document.createElement('h1')
    h1.innerHTML = studentParam.firstName + studentParam.lastName
   li.appendChild(h1)

  var h3 = document.createElement('h3');
   h3.innerHTML = 'DNI:' + studentParam.dni
   li.appendChild(h3)

  var p = document.createElement('p');

   p.innerHTML = 'Email:' + studentParam.email
   li.appendChild(p)
   return li

}

var ul = document.getElementById('students')
ul.appendChild(createStudentNode(student))





