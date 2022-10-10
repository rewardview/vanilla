
import './styles.css'

var btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', handleClickAddButton)

var btnDelSel = document.getElementById('btnDelSel')
btnDelSel.addEventListener('click', handleClickDelSel)

var btnDelLast = document.getElementById('btnDelLast')
btnDelLast.addEventListener('click', handleClickDelLast)

var btnDelAll = document.getElementById('btnDelAll')
btnDelAll.addEventListener('click', handleClickDelAll)

function handleClickAddButton() {
  var todoTextInput = document.getElementsByClassName('text-basic')
  var todoText = todoTextInput.item(0).value
  if (todoText) {
    var listBody = document.getElementById('listBody')

    var newList = document.createElement('tr')
    var newInputTd = document.createElement('td')

    var newInput = document.createElement('input')
    newInput.type = 'checkbox'
    newInput.className = 'btn-chk'

    var newTextTd = document.createElement('td')
    var textNode = document.createTextNode(todoText)
    newTextTd.appendChild(textNode)

    newInputTd.appendChild(newInput)

    newList.appendChild(newInputTd)
    newList.appendChild(newTextTd)

    listBody.appendChild(newList)
    todoTextInput.item(0).value = ''
  }
}


function handleClickDelSel() {
  var listBody = document.getElementById('listBody')

  var checkedBox = document.getElementsByClassName('btn-chk')
  for (let index = checkedBox.length - 1; index >= 0; index--) {
    const element = checkedBox[index];
    element.checked && listBody.deleteRow(index)
  }
}

function handleClickDelLast() {
  var listBody = document.getElementById('listBody')

  var checkedBox = document.getElementsByClassName('btn-chk')

  listBody.deleteRow(checkedBox.length - 1)
}

function handleClickDelAll() {
  var listBody = document.getElementById('listBody')

  var checkedBox = document.getElementsByClassName('btn-chk')
  for (let index = checkedBox.length - 1; index >= 0; index--) {
    listBody.deleteRow(index)
  }
}
