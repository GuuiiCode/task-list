const inputTask = document.querySelector('.input-task');

const btnAddTask = document.querySelector('.btn-add-task');

const ul = document.querySelector('.task');

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

        inputTask.value = "";

        button.addEventListener('click', () => {
            ul.removeChild(li);
        });
    }

    inputTask.focus();
});


