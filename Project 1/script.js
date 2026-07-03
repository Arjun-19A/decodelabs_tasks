const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", addTask);


function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText===""){

        alert("Please enter a task");

        return;
    }


    const li = document.createElement("li");

    li.classList.add("task");


    li.innerHTML=`

        <span>${taskText}</span>

        <button class="delete">
        Delete
        </button>

    `;


    li.querySelector(".delete")

    .addEventListener("click", ()=>{

        li.remove();

    });


    taskList.appendChild(li);

    taskInput.value="";
}