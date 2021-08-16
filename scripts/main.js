const taskInput = document.querySelector('.input--task');
const tasksContainer = document.querySelector('.tasks__container');
const deleteBtn = document.querySelector('.delete--task');
const clearBtn = document.querySelector('.tasks--clear--completed');
const todoAmount = document.querySelector('.number__left');
const themeBtn = document.querySelector('.sun--theme');

function toggleTheme(e) {
    let currentTheme = e.target;
    if( currentTheme.classList.contains('sun--theme') ) {
        currentTheme.classList.replace('sun--theme', 'dark--theme');
        currentTheme.setAttribute('src', './images/icon-moon.svg');
    } else {
        currentTheme.classList.replace('dark--theme', 'sun--theme');
        currentTheme.setAttribute('src', './images/icon-sun.svg');
    }
}


function updateAmountLeft() {
    let tasksUncompleted = tasksContainer.childElementCount;
    // Update amount of tasks left
    todoAmount.textContent = tasksUncompleted
}


function createTask(task) {
    // Create task and append to todo list
    let singularTask = document.createElement('div');
    singularTask.classList.add('singular-task')
    // Create task details adn append class task__details
    let taskDetailsDiv = document.createElement('div');
    taskDetailsDiv.classList.add('task__details');
    // Create checkbox for task using label element & include id
    let label = document.createElement('label');
    label.classList.add('checkbox');
    label.setAttribute('id', 'task__checkbox');
    // Create default input element that will be hidden
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox__input');
    input.setAttribute('id', 'task__checkbox');
    // Create checkbox that will be shown instead of default input checkbox
    let checkbox__box = document.createElement('div');
    checkbox__box.classList.add('checkbox__box');
    // Create Task and insert individual task
    let p = document.createElement('p');
    p.classList.add('task__content');
    p.textContent = task;
    // Create delete button
    let deleteBtnContainer = document.createElement('div');
    deleteBtnContainer.classList.add('delete--task');
    // create delet button
    let deleteBtn = document.createElement('img');
    deleteBtn.setAttribute('src', './images/icon-cross.svg');
    // Append elements to DOM
    deleteBtnContainer.appendChild(deleteBtn);
    label.append(input, checkbox__box, p);
    taskDetailsDiv.appendChild(label);
    singularTask.append(taskDetailsDiv, deleteBtnContainer);

    // Append to DOM a singular task
    tasksContainer.appendChild(singularTask);

    // update the amount of tasks
    updateAmountLeft()
}

function deleteTask() {
    console.log(e)
}

function clearAll() {
    while(tasksContainer.hasChildNodes()) {
        tasksContainer.removeChild(tasksContainer.firstChild)
    }
}


function addTask(e) {
    let task = taskInput.value;
    if(e.keyCode === 13 && task !== '') {
        createTask(task);
        taskInput.value = '';
    }
}

// function toggleTaskComplete(e) {
//     let chosenTask = e.target.closest('.singular-task');
//     let taskContent = (chosenTask.firstElementChild);
//     // if(taskContent.classList.contains('strike-though')) {
//     //     taskContent.classList.remove('strike-through')
//     // } else {
//     //     taskContent.classList.add('strike-through')
//     // }

//     console.log(taskContent)
// }


themeBtn.addEventListener('click', toggleTheme)
clearBtn.addEventListener('click', clearAll)
taskInput.addEventListener('keyup', addTask);
// tasksContainer.addEventListener('click', toggleTaskComplete);
if(deleteBtn) {
    deleteBtn.addEventListener('click', deleteTask);
}

