var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'Fazer Café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
];

function renderToDos() {
    listElement.innerHTML = '';

    for (toDo of toDos) {
        var toDoElement = document.createElement('li');
        var toDoText = document.createTextNode(toDo);

        toDoElement.appendChild(toDoText);
        listElement.appendChild(toDoElement);
    }
}

renderToDos();

function addToDo() {
    var toDotext = inputElement.value;

    toDos.push(toDotext);
    inputElement.value = '';
    renderToDos();
}

buttonElement.onclick= addToDo;