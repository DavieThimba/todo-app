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

    const deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach((button) => {
        button.onclick = () => {
            button.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        };
    });

    const editButton = document.querySelectorAll(".edit");

    editButton.forEach((editButton) => {
        editButton.onclick = (e) => {
            let targetElement = e.target.parentElement;

            if(!(e.target.className == "edit")){
                targetElement = e.target.parentElement;
            }

            newTaskInput.value = targetElement.previousElementSibling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        }
    });

    const taskCheck = document.querySelectorAll(".task-check");
    taskCheck.forEach((checkBox) => {
        checkBox.onchange = () => {
            checkBox.nextElementSibling.classList.toggle("completed");
            if(checkBox.checked) {
                taskCount -= 1;
            }
            else {
                taskCount += 1;
            }
            taskCount += 1;
            displayCount(taskCount);
        };
    });
    taskCount += 1;
    displayCount(taskCount);
    newTaskInput.value = "";
};

addBtn.addEventListener("click", addTask);

window.onload = () => {
    taskCount = 0;
    displayCount(taskCount);
    newTaskInput.value = "";
}
