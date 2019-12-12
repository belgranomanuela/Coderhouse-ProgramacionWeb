import {
  getLocalList,
  setLocalList
} from '../utils/localStorage'


function guardadosController() {
  let datos = getLocalList('Personajes')
  for (let i = 0; i < datos.length; i++) {
    const personaje = datos[i];
    $('#tableBody').append("<tr><td> " + i + "</td><td>" + personaje.nombre + "</td><td>" + personaje.genero + "</td><td>" + personaje.altura + "</td><td>" + personaje.peso + "</td><td>" + personaje.ojos + "</td><td><button class = 'btn btn-danger'>Elminar</button></td></tr>")
  }

  var buttonNode = $('.btn')
  buttonNode.click(function () {
    let fila = $(this).parent().parent();
    let nombre = fila.children()[1].innerHTML;

    var posicionAEliminar;

    for (let i = 0; i < datos.length; i++) {
      var eliminarPersonaje = datos[i];
      if (nombre === eliminarPersonaje.nombre) {
        posicionAEliminar = i;
      }
    }

    datos.splice(posicionAEliminar, 1)

    setLocalList('Personajes', datos)

    $(this).parent().parent().fadeOut(500, function () {
      console.log('Se completo la animación')
    })
  })
}


export default guardadosController;