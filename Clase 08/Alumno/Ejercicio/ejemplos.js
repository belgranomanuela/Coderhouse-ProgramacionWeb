var list = ['Ed','Edd','Eddy']

var listNode = document.createElement('ul')

listNode.id = 'mainList'
listNode.className = 'list-group'

var listItemNode

for(var i = 0; i < list.length; i++){
  listItemNode = document.createElement('li')

  listItemNode.innerHTML = list[i]

  listNode.appendChild(listItemNode)
}
document.body.appendChild(listNode)
//var
