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

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);
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

function deleteToDo(pos) {
    toDos.splice(pos, 1);
    renderToDos();
}

buttonElement.onclick = addToDo;