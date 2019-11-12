// $('#button').on('click', handleButtonClick)
$('#container').append('<table class="table table-dark"></table>');
$('.table').append('<thead class = "thead"></thead>');
$('.thead').append('<tr class = "tr-container"></tr>');
$('.tr-container').append('<th scope="col">#</th>');
$('.tr-container').append('<th scope="col">Nombre</th>');
$('.tr-container').append('<th scope="col">Género</th>');
$('.tr-container').append('<th scope="col">Altura</th>');
$('.tr-container').append('<th scope="col">Peso</th>');
$('.tr-container').append('<th scope="col">Color de ojos</th>');
$('.tr-container').append('<th scope="col"></th>');

$('<tbody id="tableBody">').insertAfter('.thead');
$('#tableBody').append('<tr id="2" style="overflow: hidden;">');
$('#2').append('<td id = "td">2</td>');
$('#2').append('<td id = "td">Luke Skywalker</td>');
$('#2').append('<td id = "td">Hombre</td>');
$('#2').append('<td id = "td">172 cm</td>');
$('#2').append('<td id = "td">77 kg</td>');
$('#2').append('<td id = "td">Azul</td>');
$('#2').append('<td style="padding:0"><button type="button" class="btn btn-danger">Eliminar</button></td>');

$('<tbody id="tableBody">').insertAfter('.thead');
$('#tableBody').append('<tr id="1" style="overflow: hidden;">');
$('#1').append('<td id = "td">1</td>');
$('#1').append('<td id = "td">Luke Skywalker</td>');
$('#1').append('<td id = "td">Hombre</td>');
$('#1').append('<td id = "td">172 cm</td>');
$('#1').append('<td id = "td">77 kg</td>');
$('#1').append('<td id = "td">Azul</td>');
$('#1').append('<td style="padding:0"><button type="button" class="btn btn-danger">Eliminar</button></td>');

var buttonNode = $('.btn')
buttonNode.click( function () {
   $('#1').fadeOut(3000, function (){
        console.log('Se completo la animación')
      } )})