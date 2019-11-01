var boxes = $('.box')

let num = 0;

boxes.click(function() {
  let box = $(this) //event.target
  if (box.hasClass ('circle')) {
    return
  }
  num++;
  if (num%2===0) {
    box.addClass('cross')
  }
  else{ 
    box.addClass('circle')
}

})
