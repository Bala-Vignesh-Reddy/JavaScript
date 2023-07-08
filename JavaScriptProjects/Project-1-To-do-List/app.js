let toDoList = [];

document.getElementById("task-output").addEventListener("click", ()=>{ 
    let toDo = document.getElementById("task-input").value;
    toDoList.push(toDo);
    toDo = document.getElementById("task-input").value='';
    displayToDo();
});

function deleteTodo(index) {
    toDoList.splice(index, 1);
    displayToDo();
}

function displayToDo(){
    let list = "<ul>";
    for(let i=0; i <toDoList.length; i++){
        list += "<li>" + toDoList[i]+ "   "  + "<button id='remove' onclick='deleteTodo(" + i + ")'>Remove</button></li>"
    }
    list += "</ul>";
    document.getElementById("result").innerHTML = list;
}

document.getElementById("task-clear").addEventListener("click", ()=>{
    toDoList = [];
    displayToDo();
});











// document.getElementById("task-output").addEventListener("click", ()=>{

//     let taskInput = document.getElementById("task-input").value;

//     document.getElementById("write").innerHTML += taskInput  + "<br>";

// });


// // document.getElementById("task-output").addEventListener("click", ()=>{
//     document.getElementById("write").innerHTML = " ";
// });






// // document.getElementById("task-output").addEventListener("click", () =>{
// //     alert("hello");
// // })
// let taskOutput = document.getElementById("task-output");
// let toDo = document.getElementById("task-input").value;
// let result = document.getElementById("result");
// taskOutput.addEventListener("click", ()=>{
    
//     result.innerHTML = toDo;
// })

// document.getElementById("result").innerHTML = document.getElementsByClassName("input").value