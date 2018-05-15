var input = document.getElementById('list');
input.addEventListener('click',function () {
  console.log(input);
  var listName = document.getElementById('list-name')
  listName.style.display = 'block';

var save = document.getElementById('save')
save.addEventListener('click', function(){

  var namelist = document.getElementById('list').value;
  //limpiar el textarea
	document.getElementById('list').value = '';
})


})
