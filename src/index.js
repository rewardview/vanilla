
import './styles.css'

var addButton = document.getElementById('btnAdd')
addButton.addEventListener('click', handleClickAddButton)

function handleClickAddButton() {
  var todoTextInput = document.getElementsByClassName('text-basic')
  var todoText = todoTextInput.item(0).value

  var listBody = document.getElementById('listBody')

  var newList = document.createElement('tr')
  var newInputTd = document.createElement('td')

  var newInput = document.createElement('input')
  newInput.type = 'checkbox'
  newInput.class = 'btn-chk'

  var newTextTd = document.createElement('td')
  var textNode = document.createTextNode(todoText)
  newTextTd.appendChild(textNode)

  newInputTd.appendChild(newInput)

  newList.appendChild(newInputTd)
  newList.appendChild(newTextTd)

  listBody.appendChild(newList)
  todoTextInput.item(0).value = ''
}



// var main = document.getElementById('main')
// function init() {
//   var box = document.createElement('div')
//   box.className = 'list-box'

//   var title = createTitle()
//   var writeBox = createWriteBox()
//   // var todoTable = createTodoTable()
//   box.appendChild(title)
//   box.appendChild(writeBox)
//   // box.appendChild(todoTable)

//   main.appendChild(box)
// }


// function createTitle() {
//   var title = document.createElement('h1')
//   title.innerText = 'To Do List'
//   return title
// }

// function createWriteBox() {
//   var writeBox = document.createElement('div')
//   writeBox.className = 'write-box'
//   var textInput = document.createElement('input')
//   textInput.className = 'text-basic'
//   var addButton = document.createElement('button')
//   addButton.id = 'btnAdd'
//   addButton.addEventListener('click', handleClickAddButton)
//   return writeBox
// }
// function createTodoTable() {
//   var todoTable = document.createElement('table')
//   todoTable.className = 'list-table'
//   var colgroup = document.createElement('colgroup')
//   var col1 = document.createElement('col')
//   col1.style.width = '10%'
//   colgroup.appendChild(col1)
//   var col2 = document.createElement('col')
//   col2.style.width = '90%'
//   colgroup.appendChild(col2)
//   todoTable.appendChild(colgroup)

//   //  <table class="list-table">
//   //    <colgroup>
//   //      <col width="10%" />
//   //      <col width="90%" />
//   //    </colgroup>
//   //    <thead>
//   //      <tr>
//   //        <th>check</th>  
//   //        <th>To do List</th>
//   //      </tr>
//   //    </thead>
//   //    <tbody id="listBody">
//   //      <tr>
//   //        <td><input type="checkbox" class="btn-chk" /></td>
//   //        <td>청소하기</td>
//   //      </tr>
//   //      <tr>
//   //        <td><input type="checkbox" class="btn-chk" /></td>
//   //        <td>숙제하기</td>
//   //      </tr>
//   //    </tbody>
//   //  </table>

//   return todoTable
// }
// init()

// function handleClickAddButton() {

// }
