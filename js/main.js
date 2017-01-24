var boton = document.getElementById('boton');
var input = document.getElementById('mensaje');
var lista = document.getElementById('lista');

boton.addEventListener('click', onButtonClick);


function onButtonClick(evt)
{
	agregarMensaje();
}
//***Agregar mensaje y checkbox
function agregarMensaje()
{
	var item = document.createElement('li');
	var span = document.createElement('span');
	//Agregar chheckbox
    var elementoCheckbox = document.createElement("input");
    var checkbox=elementoCheckbox .setAttribute("type", "checkbox");
    var checkboxValue=elementoCheckbox .setAttribute("id", "myCheck");
    item.appendChild(elementoCheckbox);     
    //Fin Crear chheckbox
    
    //Crear elemento para tacho
    var tacho = document.createElement("i");
    tacho.setAttribute("class","fa fa-trash-o");
    tacho.style.float="right";
    //Fin elemento para tacho
    
	span.innerHTML = input.value;//mensaje
	item.appendChild(span);//
    item.appendChild(tacho);
	lista.appendChild(item);    
	input.value = '';
	input.focus();

	tacho.addEventListener('click', onItemClick);
    //Tachar mensaje
    var myCheck = document.getElementById('myCheck');
    myCheck.addEventListener('click', tacharMensaje);
    function tacharMensaje(){

    if(myCheck.checked==true){
        span.style.text_decoration = "line-through";
    }
}
}

//Quitar menaje
function onItemClick(evt)
{
	console.log(evt.target.parentNode.parentNode);
	lista.removeChild(evt.target.parentNode);
}

