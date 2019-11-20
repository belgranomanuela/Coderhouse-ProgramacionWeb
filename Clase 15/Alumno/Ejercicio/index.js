function getData(){
  var request = $.ajax({
      url: "https://swapi.co/api/people/5",
      method: "GET"
  })
  request.done(function(data) {
      
      $('#container').append('<h1 class= "text-center bg-warning"> Personaje: ' + data.name + '</h1>');
      $('#container').append('<h4 class= "col text-success"> Altura y Peso: ' + data.height + ' cm. & ' + data.mass + ' kg.' + '</h4>');
      $('#container').append('<h4 class= "col text-primary"> Genero: ' + data.gender + '</h4>');
      $('#container').append('<h4 class= "col text-danger"> Películas: </h4> <ul class="movies"> </ul>');
      
      for (let index = 0; index < data.films.length; index++) {
          const element = data.films[index];
          $('.movies').append('<li> ' + element + '</li>');
      }
  });
  request.fail(function(error) {
      console.log( 'Error: ' ,error);
  })
}
getData();


// var request = $.ajax({
//   url: "https://swapi.co/api/people/5/ ",
//   method: "GET",
// })

// request.done(function( data ) {
//   console.log( 'Respuesta: ',data )
//   console.log(data.name)
// $('#container').append('<h1 id:"h1">Personaje:</h1>');
// $('#container').append('<h2 id:"h2">Altura y Peso:</h2>');
// $('#container').append('<h3 id:"h3">Sexo:</h3>');
// $('#container').append('<h4 id:"h4">Peliculas:</h4>');

// // for (let i = 0; i < data.length; i++) {
// //   const propiedad = data[i];
// //   if (i = name || height || mass || gender || films) {
// //     return
// //   }
// // }

// $('#h1').html = data.name;
// $('#h2').html = data.height + data.mass;
// console.log(data.height)
// console.log(data.mass);
// $('#h3').html = data.gender;
// console.log(data.gender);
// $('#h4').html = data.films;
// console.log(data.films);
// });

// request.fail(function( error ) {
//   console.log( 'Error: ' , error )
// })
