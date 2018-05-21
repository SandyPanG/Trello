//Añadir lista
var input = document.getElementById('list')
input.addEventListener('click',function () {
  //console.log(input);
  var listName = document.getElementById('list-name')
  listName.style.display = 'block';


var save = document.getElementById('save');
save.addEventListener('click', function(){
//tomar el texto ingresado en el textarea
newList = document.getElementById('list').value;
//limpiar el textarea
document.getElementById('list').value = '';
//que aparezca link ingresar nueva tarjeta

//nueva lista(el h4)
  var title = document.createElement('h4');
  var textNewList = document.createTextNode(newList);
  var listName = document.getElementById('msg');
//asignando a los parents del h4
    title.appendChild(textNewList);
    listName.appendChild(title);

//Añadir tarjeta
//crear textarea y anchord
  var addTask = document.createElement('a');
    addTask.setAttribute("href", "#");
  var task = document.createTextNode('Añadir una tarea...');

//asignando parents
  addTask.appendChild(task);
  listName.appendChild(addTask);

//función
save.addEventListener('click', function(){
  newTask = document.getElementByTagName('a');

//nuevo div
  var newDiv = document.createElement('div');
});
});
});
