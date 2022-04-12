const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

let toDos = [];
const TODOS_KEY = 'toDos';

function saveToDos() {
  const toDosStringify = JSON.stringify(toDos);
  localStorage.setItem(TODOS_KEY, toDosStringify);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function paintTodo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;
  const span = document.createElement('span');
  span.innerText = newTodoObj.text;
  const button = document.createElement('button');
  button.innerText = '🞫';
  button.addEventListener('click', deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);

  saveToDos();
  paintTodo(newTodoObj);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
  // for (i in parsedToDos) {
  //   paintTodo(parsedToDos[i]);
  // }
}
