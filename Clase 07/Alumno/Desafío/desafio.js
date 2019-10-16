var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']


function setLocalList(key, list) {
  
  if (typeof key !== 'string' && Array.isArray(list)) {
    return;
  }

  var stringifiedTestList = JSON.stringify(testList)

localStorage.setItem(key, stringifiedTestList)
}

setLocalList('studentsList', testList);





function getLocalList(key) {
  if (typeof key !== 'string') {
    console.log([])
    return;
  }

  var getItem = localStorage.getItem(key);
  var parsedTestList = JSON.parse(getItem);


console.log(parsedTestList)
}

var studentsList = getLocalList(7)