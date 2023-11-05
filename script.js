const addBtn = document.querySelector("#button");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector("#countValue");

let taskCount = 0;

const displayCount = (taskCount) => {
    countValue.innerText = taskCount;
}

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if(!taskName){
        setTimeout(() => {
            error.computedStyleMap.display = "block";
        },200);
        return;
    }

    const task = `<div class = "task"
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    
    <button class="delete">
    <i class="fa-solid fa-trash"></i>
    </button>

    </div>`;

    tasksContainer.insertAdjacentHTML
    ("beforeend", task);
};

addBtn.addEventListener("click", addTask); 

const deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach((button) => {
    button.onclick = () => {
        button.parentNode.removeChild();
        taskCount = -1;
        displayCount(taskCount);
    };
});

