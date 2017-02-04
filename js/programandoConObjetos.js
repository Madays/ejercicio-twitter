function MakeTasks(){
    this.inputTask = document.getElementById("mensaje");
    this.newTask = function(){ 
        var html = "<li id='itemTask'><input type='checkbox' id='check' onchange='crossOut()'>"+this.inputTask.value+"<i class='fa fa-trash-o' style='float:right;' id='trash' onclick='deleteTask()'></i></li>";    
        var list = document.getElementById("lista");
        list.innerHTML+=html;        
    }
 
    this.clearInputTask = function(){
        this.inputTask.value="";
    } 
    
}
var task = new MakeTasks();
var button = document.getElementById("boton");
button.addEventListener('click',function(){
    task.newTask();
    task.clearInputTask();
});

function crossOut(){   
        var check = document.getElementById("check");
        var itemTask = document.getElementById("itemTask");

        if(check.checked){
            itemTask.style.textDecoration="line-through";
        }else{
            itemTask.style.textDecoration="none";
        }
    } 

function deleteTask(){
    var trash = document.getElementById("trash");
    var list = document.getElementById("lista"); list.removeChild(trash.parentNode);        
}












/*var listaTareas =[["T1",true],["T2",false]];
function drawTasksList(){
    for(var i in listaTareas){
        var html = "<li><input type='checkbox' "+(listaTareas[i][1]?"checked ":"")+">"+listaTareas[i][0]+"</li>";

        var lista = document.getElementById("lista");
    lista.innerHTML+=html;
    }
/*-------ejm de un tipo de dato es objeto--------*/  
/*var listaTareas =[{nombre:"T1",isDone:true},{nombre:"T2",isDone:false}];
function drawTasksList(){
    for(var i in listaTareas){
        var html = "<li><input type='checkbox' "+(listaTareas[i].isDone?"checked ":"")+">"+listaTareas[i].nombre+"</li>";

        var lista = document.getElementById("lista");
    lista.innerHTML+=html;
    }    
}
}*/
/*function drawTasksList(){
    var inputTask = document.getElementById("mensaje");
    var html = "<li id='task'><input type='checkbox' id='check' onchange='crossOut()'>"+inputTask.value+"</li>";
    var lista = document.getElementById("lista");
    lista.innerHTML+=html; 
    inputTask.value="";
}
function crossOut(){
    var check = document.getElementById("check");
    var task = document.getElementById("task");

    if(check.checked){
        //tachar
    }
}*/



