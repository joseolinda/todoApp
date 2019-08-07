// Guardar os elementos em variáveis
const newTask = document.querySelector('#new-task');
const addTaskBtn = document.querySelector('#addTask');

const listaFazer = document.querySelector(".todo-list ul");
const listaFeito = document.querySelector(".complete-list ul");

// Funcao Adicionar Tareta
const createNewTask = function(task) {
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
};

const addTask = function() {

    if (newTask.value != "") {

        let novo_li = createNewTask(newTask.value);
        listaFazer.appendChild(novo_li);

        // Anexar função
        anexarFuncaoCompletar(novo_li, completarTarefa);

        newTask.value = "";

    }

};

const completarTarefa = function() {

    let li = this.parentNode;

    let deleteBtn = document.createElement("button"); // <button>
    deleteBtn.innerText = "Apagar";
    deleteBtn.className = "delete";
    li.appendChild(deleteBtn);

    let feito = li.querySelector("input[type=checkbox]");
    feito.remove();


    listaFeito.appendChild(li);

    anexarFuncaoApagar(li, apagarTarefa);

};

const apagarTarefa = function() {

    let li = this.parentNode;
    let ul = li.parentNode;

    ul.removeChild(li);

};

const anexarFuncaoCompletar = function(item, botaoCheckClick) {

    let checkBox = item.querySelector("input[type=checkbox]");

    checkBox.onchange = botaoCheckClick;
};

var anexarFuncaoApagar = function(item, botaoDeletePress) {

    var botaoDelete = item.querySelector(".delete");

    botaoDelete.onclick = botaoDeletePress;

};
