//Añadir lista
var input = document.getElementById('list')
input.addEventListener('click',function () {
  //console.log(input);
  var listName = document.getElementById('list-name')
  listName.style.display = 'block';
})

var save = document.getElementById('save');
save.addEventListener('click', function(){
//tomar el texto ingresado en el textarea
newList = document.getElementById('list').value;
//limpiar el textarea
document.getElementById('list').value = '';
//nueva lista(el h4)
  var title = document.createElement('h4');
  var textNewList = document.createTextNode(newList);
  var listName = document.getElementById('msg');
  title.appendChild(textNewList);
  listName.appendChild(title);
});




/*
//función del botón guardar
var save = document.getElementById('save');
save.addEventListener('click', function(){
  var newlist = document.getElementById('list').value;
  //limpiar el textarea
	document.getElementById('list').value = '';






 //contenedor que esta en el html
var msg = document.getElementById('msg');

  //creamos el div que contiene cada comentario

	var newComments = document.createElement('div');

  //nodos de texto del textarea

	var textNewComment = document.createTextNode(namelist);



	var contenedorElemento = document.createElement('p');

	contenedorElemento.appendChild(textNewComment);

	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);
})


})
*/
