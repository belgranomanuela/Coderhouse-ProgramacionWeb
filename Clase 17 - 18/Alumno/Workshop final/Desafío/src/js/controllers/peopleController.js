function peopleController() {
  
  getData()
}

function getData() {
  
  var request = $.ajax({
    url: "https://swapi.co/api/people",
    method: "GET"
  })  

request.done(function( data ) {
  console.log( 'Respuesta: ',data )

var datos = data.results
  for (let i = 0; i < datos.length; i++) {
  const personaje = datos[i];

  $('#tableBody').append("<tr><td> "+ i +"</td><td>"  + personaje.name + "</td><td>" + personaje.gender + "</td><td>" + personaje.height + "</td><td>" + personaje.mass + "</td><td>" + personaje.eye_color + "</td><td><button>Guardar</button></td></tr>")}
  
  var btn = $("button")
  btn.attr("type", "button")
  btn.attr("class","btn btn-danger")

btn.click(function() {
  boton = $(this)

  var td = boton.parent()
var tr = td.parent()
tr.fadeOut(700, function() {

})
})
  
  
});

  request.fail(function( error ) {
    console.log( 'Error: ' , error )
  })  
}


export default peopleController;