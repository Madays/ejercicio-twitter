var boton = document.getElementById('boton');
var input = document.getElementById('mensaje');
var lista = document.getElementById('lista');

boton.addEventListener('click', onButtonClick);

function onButtonClick(evt)
{
	input.className = "otraclase otraclasemas";
	console.log(input.classList);
	//agregarMensaje();
}

function agregarMensaje()
{
	var item = document.createElement('li');
	var span = document.createElement('span');

	span.innerHTML = input.value;
	item.appendChild(span);
	lista.appendChild(item);

	input.value = '';
	input.focus();

	span.addEventListener('click', onItemClick);
}

function onItemClick(evt)
{
	console.log(evt.target.parentNode.parentNode);
	//var padre = evt.target.parentNode.parentNode;
	lista.removeChild(evt.target.parentNode);
}







//-
