/*Datos*/
var arrayTaks = [];
/*----------------------------------*/
function pushTask(){
    var inputTask = document.getElementById("mensaje");
    if(inputTask.value!==""){
        arrayTaks.push({task:inputTask.value,isDone:false});  
        drawTasksList();
    }    
    inputTask.value=""; 
}
function drawTasksList(){
    for(var i in arrayTaks){        
        var html = "<li><input type='checkbox' onclick=isDoneTask("+i+")>"+arrayTaks[i].task+"<i class='fa fa-trash-o' style='float:right;' onclick='onItemClick()' id='trash'></i></li>";
    }    
    var list = document.getElementById("lista");
    list.innerHTML+=html;
}
function onItemClick(){
    var list = document.getElementById("lista");
    var trash = document.getElementById("trash");
	list.removeChild(trash.parentNode);
}
function isDoneTask(i){    
    if(arrayTaks[i].isDone==false){
        arrayTaks[i].isDone=true;
    }else{
        arrayTaks[i].isDone=false;    
    }    
    //TACHAR*/
    crossOut(i);
}
function crossOut(i){
    if(arrayTaks[i].isDone==true){
        var lis = document.getElementsByTagName("li");
        lis[i].setAttribute("style","text-decoration: line-through;");
    }else{
        var lis = document.getElementsByTagName("li");
        lis[i].setAttribute("style","text-decoration: none;");
    }
}



