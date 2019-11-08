$(document).ready(function () {
  
  $(document).keydown(handleKeyDown);
    
    function handleKeyDown(event){

        var numeroInicial = parseInt ($('#numText').html());
      console.log (numeroInicial)
        switch (event.which) {
        case 13: 
          $('#numText').html(numeroInicial);
          break;
        case 38:
          numeroInicial++;
          $('#numText').html(numeroInicial);
          break;
        case 40: 
        numeroInicial--;
          $('#numText').html(numeroInicial);
          break;
        default:
          break;
      }
}   
})