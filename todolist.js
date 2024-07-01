let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'Task',
  dueDate: 'XX-XX-XXXX'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML='';
  for (let i=0;i<todoList.length;i++) {
    const todoObject=todoList[i]
    const name=todoObject.name;
    const dueDate=todoObject.dueDate;

    const html=`<div class='eachTask'>
    <div class='name'>${name}</div>
    <div class='date'>${dueDate}</div>
    <button onclick="
        todoList.splice(${i}, 1);
        saveTodoList();
        renderTodoList();
      " class="deleteButton">Delete</button></div>
    `
    todoListHTML+=html
  }
  document.querySelector('.result')
    .innerHTML = todoListHTML;
}
function addTodo(){
  const inputElement=document.querySelector('.todoData');
  const name=inputElement.value;
  const inputDateElement=document.querySelector('.todoDate');
  const dueDate=inputDateElement.value;

  todoList.push({name,dueDate});
  saveTodoList();
  inputElement.value = '';
  renderTodoList();
}
function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}