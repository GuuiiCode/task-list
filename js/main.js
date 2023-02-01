const inputTask = document.querySelector('.input-task');

const taskList = document.querySelector('.task-list');

const KEY_LOCAL_STORAGE = 'taskList';

let db_tasks = [];


/**Add tasks**/
function addTasks() {
    if (inputTask.value) {
        let tasks = {
            id: generateId(),
            name: inputTask.value
        }

        createElement(tasks);
        db_tasks.push(tasks);
        saveStorage();
        inputTask.value = '';
    }

    inputTask.focus();
}

/**Save local storage**/
function saveStorage() {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(db_tasks));
}

/**Remove local storage**/
function deleteStorage(id) {
    let confirm = window.confirm('Are you sure you want to delete?')
    if (confirm) {
        const taskIndex = db_tasks.findIndex(f => f.id == id);

        if (taskIndex < 0) {
            throw new Error("Task id not found.")
        }

        db_tasks.splice(taskIndex, 1);
        saveStorage();

        location.reload();
    }
}

/**Recovery local storage**/
const getStorage = () => {
    const tasks = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));

    if (tasks) {
        db_tasks = tasks;
        db_tasks.forEach(task => {
            createElement(task);
        });
    }
}

/**Render elements**/
getStorage();

/**Create id**/
function generateId() {
    return Math.floor(Date.now() * Math.random()).toString(36)
}

/**Build initialization variables**/
function createElement(task) {
    let li = document.createElement('li');
    li.classList.add('content');

    let div = document.createElement('div');
    div.classList.add('content-left');

    let input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox-task');

    let span = document.createElement('span');

    let button = document.createElement('button');
    button.setAttribute('onclick', `deleteStorage('${task.id}')`);
    button.classList.add('btn-delete-task');

    let i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-trash');

    taskList.appendChild(li);

    li.appendChild(div);

    div.appendChild(input);

    div.appendChild(span);

    li.appendChild(button);

    button.appendChild(i);

    span.innerHTML = task.name;
}