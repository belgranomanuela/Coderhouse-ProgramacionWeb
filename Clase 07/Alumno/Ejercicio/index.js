var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']
var notas = ['7','4', '8', '10']

function setLocalList(key, list) {
  
  if (typeof key !== 'string' && Array.isArray(list)) {
    return;
  }

  var stringifiedTestList = JSON.stringify(testList)

localStorage.setItem(key, list)
}

setLocalList('StudentsList', testList);
setLocalList('Notas', notas)



