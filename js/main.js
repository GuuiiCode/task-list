const inputTask = document.querySelector('.input-task');

const btnAddTask = document.querySelector('.btn-add-task');

const ul = document.querySelector('.task-list');

let task_list = [];

btnAddTask.addEventListener('click', () => {
    if (inputTask.value) {
        let li = document.createElement('li');
        li.classList.add('content');

        let div = document.createElement('div');
        div.classList.add('content-left');

        let input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        input.classList.add('checkbox-task');

        let span = document.createElement('span');

        let button = document.createElement('button');
        button.classList.add('btn-delete-task');

        let i = document.createElement('i');
        i.classList.add('fa');
        i.classList.add('fa-trash');

        ul.appendChild(li);

        li.appendChild(div);

        div.appendChild(input);

        div.appendChild(span);

        li.appendChild(button);

        button.appendChild(i);

        span.innerHTML = inputTask.value;

        inputTask.value = '';

        createStorage(span.innerHTML);

        button.addEventListener('click', () => {
            ul.removeChild(li);
        });
    }

    inputTask.focus();
});

function createStorage(content) {
    task_list.push(content);
    localStorage.setItem('tarefas', JSON.stringify(task_list));
}

const getStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tarefas'));

    if (tasks) {
        for (let task of tasks) {
            let li = document.createElement('li');
            li.classList.add('content');

            let div = document.createElement('div');
            div.classList.add('content-left');

            let input = document.createElement("input");
            input.setAttribute('type', 'checkbox');
            input.classList.add('checkbox-task');

            let span = document.createElement('span');

            let button = document.createElement('button');
            button.classList.add('btn-delete-task');

            let i = document.createElement('i');
            i.classList.add('fa');
            i.classList.add('fa-trash');

            ul.appendChild(li);

            li.appendChild(div);

            div.appendChild(input);

            div.appendChild(span);

            li.appendChild(button);

            button.appendChild(i);

            span.innerHTML = task;

            task_list.push(span.innerHTML);
        }
    }
}

getStorage();





