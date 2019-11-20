  
  var div = $("div")
    div.addClass("container")
    div.append("<table></table>")

  var table = $("table")
    table.addClass("table table-dark")
    table.append("<thead></thead>")
  
  var thead = $("thead")
    thead.append("<tr></tr>")
  
  var tr1 = $("tr")
    tr1.append("<th>#</th><th>Name</th><<th>Height</th><th>Mass</th><th>Gender</th><th></th>")
    $("th").attr("scope", "col")

    table.append("<tbody></tbody>")

  var tbody = $("tbody")
    tbody.attr("id", "tableBody")
  
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

  tbody.append("<tr><td></td><td>" + personaje.name + "</td><td>" + personaje.height + "</td><td>" + personaje.mass + "</td><td>" + personaje.gender + "</td><td><button>Eliminar</button></td></tr>")
  
  var tr2 = tbody.children()
    tr2.attr("style", "overflow: hidden;")
  
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
  }

  });

  request.fail(function( error ) {
  console.log( 'Error: ' , error )
  })  
  }

  getData()