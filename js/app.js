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
    addTask.id = 'addTask';
  listName.appendChild(addTask);

//función
    //  save.addEventListener('click', function(){
      //    newTask = document.getElementByTagName('a');

//Nuevo form

//función
 var newTask = document.getElementById("addTask");
  newTask.addEventListener('click', function(){


//nuevo div
  var newDiv = document.createElement('div');
    newDiv.classList.add('second');
  var form = document.createElement('form');
  var inpt = document.createElement('input');
    inpt.setAttribute = ('type','placeholder');
    inpt.setAttribute = ('value','Añadir lista');
  //var add = document.createTextNode('Añadir lista...');
  var sv = document.createElement('button');
    sv.setAttribute('type','button');
    sv.setAttribute('value','Guardar');
  var close = document.createElement('button');
    close.setAttribute('value','&times');
//asignando parents
  form.appendChild(inpt);
  form.appendChild(sv);
  form.appendChild(close);
  newDiv.appendChild(form);
  listName.appendChild(newDiv);

  newTask.style.display = "none"; // agregas esta linea si quieres que desaparezca el anadir una tarea

//function
// para la siguiente version utiliza el botton que creaste como sv

  sv.addEventListener('click', function(){
  //document.getElementByClassName('second');

      });
    });
  });
});
