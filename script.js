document.addEventListener('DOMContentLoaded', loadTasks);

function taskEnter () {
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            taskAdd();
        }
    });
}

function taskAdd() {
    const taskInput = document.querySelector('.js-input');
    const task = taskInput.value;
    let taskContainer = document.querySelector('.taskIncompleteContainer');

    if (task !== '') {
        let taskElement = createTaskElement(task, false);
        taskContainer.appendChild(taskElement);
        taskInput.value = '';

        saveTask(task, false);
        removeTopBorderIfFirst(taskContainer);
    }
}

function taskComplete(taskElement) {
    let taskContainer1 = document.querySelector('.taskIncompleteContainer');
    let taskContainer2 = document.querySelector('.taskCompleteContainer');

    let checkBoxImage = taskElement.querySelector('.checkbox');
    if (checkBoxImage) {
        checkBoxImage.src = "images/check.png";
    }

    let taskText = taskElement.querySelector('.taskIncomplete');
    if (taskText) {
        taskText.classList.add('taskComplete');
        taskText.classList.remove('taskIncomplete');
    }

    if (taskElement) {
        taskContainer2.appendChild(taskElement);
        if (taskContainer1.contains(taskElement)) {
            taskContainer1.removeChild(taskElement);
        }
    }

    updateTaskInLocalStorage(taskElement.querySelector('p').textContent, true);

    removeTopBorderIfFirst(taskContainer1);
    removeTopBorderIfFirst(taskContainer2);
}

function taskDelete(taskElement) {
    let taskContainer = taskElement.parentElement;
    let taskText = taskElement.querySelector('p').textContent;

    if (taskContainer.contains(taskElement)) {
        taskContainer.removeChild(taskElement);
    }

    deleteTaskFromLocalStorage(taskText);
    removeTopBorderIfFirst(taskContainer);
}

function createTaskElement(task, isComplete) {
    let taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
        <button class="checkboxButton">
            <img class="checkbox" src="images/${isComplete ? 'check.png' : 'uncheck.png'}">
        </button>
        <p class="${isComplete ? 'taskComplete' : 'taskIncomplete'}">${task}</p>
        <button class="deleteButton">
            <img class="deleteIcon" src="images/trash-bin.png">
        </button>
    `;

    const checkBoxImage = taskElement.querySelector('.checkbox');
    checkBoxImage.addEventListener('click', () => taskComplete(taskElement));

    const deleteButton = taskElement.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => taskDelete(taskElement));

    return taskElement;
}

function removeTopBorderIfFirst(container) {
    const tasks = container.querySelectorAll('.task');
    tasks.forEach((task, index) => {
        if (index === 0) {
            task.style.borderTop = 'none';
        } else {
            task.style.borderTop = '1px solid black';
        }
    });
}

function saveTask(task, isComplete) {
    let tasks = JSON.parse(localStorage.getItem(isComplete ? 'completeTasks' : 'incompleteTasks')) || [];
    tasks.push(task);
    localStorage.setItem(isComplete ? 'completeTasks' : 'incompleteTasks', JSON.stringify(tasks));
}

function updateTaskInLocalStorage(task, isComplete) {
    let incompleteTasks = JSON.parse(localStorage.getItem('incompleteTasks')) || [];
    incompleteTasks = incompleteTasks.filter(t => t !== task);
    localStorage.setItem('incompleteTasks', JSON.stringify(incompleteTasks));

    let completeTasks = JSON.parse(localStorage.getItem('completeTasks')) || [];
    completeTasks.push(task);
    localStorage.setItem('completeTasks', JSON.stringify(completeTasks));
}

function deleteTaskFromLocalStorage(task) {
    let incompleteTasks = JSON.parse(localStorage.getItem('incompleteTasks')) || [];
    let completeTasks = JSON.parse(localStorage.getItem('completeTasks')) || [];

    incompleteTasks = incompleteTasks.filter(t => t !== task);
    completeTasks = completeTasks.filter(t => t !== task);

    localStorage.setItem('incompleteTasks', JSON.stringify(incompleteTasks));
    localStorage.setItem('completeTasks', JSON.stringify(completeTasks));
}

function loadTasks() {
    let incompleteTasks = JSON.parse(localStorage.getItem('incompleteTasks')) || [];
    let completeTasks = JSON.parse(localStorage.getItem('completeTasks')) || [];

    let taskContainer1 = document.querySelector('.taskIncompleteContainer');
    let taskContainer2 = document.querySelector('.taskCompleteContainer');

    incompleteTasks.forEach(task => {
        let taskElement = createTaskElement(task, false);
        taskContainer1.appendChild(taskElement);
    });

    completeTasks.forEach(task => {
        let taskElement = createTaskElement(task, true);
        taskContainer2.appendChild(taskElement);
    });

    removeTopBorderIfFirst(taskContainer1);
    removeTopBorderIfFirst(taskContainer2);
}
