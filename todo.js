// Guardar os elementos em variáveis
const newTask = document.querySelector('#new-task');
const addTaskBtn = document.querySelector('#addTask');

const listaFazer = document.querySelector(".todo-list ul");
const listaFeito =  document.querySelector(".complete-list ul");

// Funcao Adicionar Tareta
const createNewTask = function(task){
  let item = document.createElement("li"); //<li>
  let checkBox = document.createElement("input"); //checkbox
  let label = document.createElement("label"); // <label>
  
  //Adiconar texto
  label.innerText = task;
  
  // Definir o input com checkbox
  checkBox.type = "checkbox";
  
  // Adicionar elementos no LI
  item.appendChild(checkBox);
  item.appendChild(label);
  
  return item;
}

const addTask = function(){
  
  let novo_li = createNewTask(newTask.value);
  
}
