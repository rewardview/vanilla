
import './styles.css'

var btnAdd = document.getElementById('btnAdd')
btnAdd.addEventListener('click', handleClickAddButton)

var btnDelSel = document.getElementById('btnDelSel')
btnDelSel.addEventListener('click', handleClickDelSel)

var btnDelLast = document.getElementById('btnDelLast')
btnDelLast.addEventListener('click', handleClickDelLast)

var btnDelAll = document.getElementById('btnDelAll')
btnDelAll.addEventListener('click', handleClickDelAll)


document.addEventListener('mousedown', mouseDownHandler);
document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);


var dragFlag = false,
  mouseDownX = 0,
  mouseDownY = 0,
  mouseX = 0,
  mouseY = 0,
  currRow = null;


document.global = {}

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

function mouseDownHandler(event) {
  var row = getTrTarget(event)
  if (row) {

    var table = document.getElementById('list-table')
    var rows = table.querySelectorAll('tbody tr');

    rows.forEach((e, k, node) => {
      debugger
    })

    currRow = row
    document.global.currRow = currRow


    mouseDownY = event.clientY;
    dragFlag = true
  }
}

function mouseMoveHandler(event) {
  //test111
  if (!dragFlag) return
  var table = document.getElementById('list-table')
  var tbody = table.querySelector('tbody');
  mouseY = event.clientY - mouseDownY;
  var curPosition = currRow.getBoundingClientRect()
  var currStartY = curPosition.y, currEndY = curPosition.y + curPosition.height
  var rows = table.querySelectorAll('tbody tr');

  for (var i = 0; i < rows.length; i++) {
    let rowElem = rows[i],
      rowSize = rowElem.getBoundingClientRect(),
      rowStartY = rowSize.y, rowEndY = rowStartY + rowSize.height;
    if (currRow !== rowElem && isIntersecting(currStartY, currEndY, rowStartY, rowEndY)) {

      console.log(Math.abs(mouseY));

      if (Math.abs(mouseY) < rowSize.height / 2) {
        swapRow(rowElem, i);
      }
    }
  }

}

function mouseUpHandler(event) {
  currRow = null
  dragFlag = false
}

function getTrTarget(event) {
  if (event) {
    if (event.target.nodeName.toLowerCase() === 'td') return event.target.closest('tr')
    if (event.target.nodeName.toLowerCase() === 'tr') return event.target
  }
}

function isIntersecting(min0, max0, min1, max1) {
  return max0 >= min1 &&
    min0 <= max1;
}

function swapRow(row, index) {

  let currIndex = Array.from(tbody.children).indexOf(currRow),
    row1 = currIndex > index ? currRow : row,
    row2 = currIndex > index ? row : currRow;
  tbody.insertBefore(row1, row2);
}