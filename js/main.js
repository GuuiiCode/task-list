const inputTask = document.querySelector('.input-task');

const btnAddTask = document.querySelector('.btn-add-task');

const main = document.querySelector('.container');


btnAddTask.addEventListener('click', () => {

    let section = document.createElement('section');
    section.classList.add('task-list');

    let ul = document.createElement('ul');
    ul.classList.add('to-do-list');

    let div = document.createElement('div');
    div.classList.add('teste');

    let input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox-task');

    let li = document.createElement('li');

    let button = document.createElement('button');
    button.classList.add('btn-delete-task');

    let i = document.createElement('i');
    i.classList.add('fa');
    i.classList.add('fa-trash');


    main.appendChild(section);

    section.appendChild(ul);

    ul.appendChild(div);

    div.appendChild(input);

    div.appendChild(li);

    ul.appendChild(button);

    button.appendChild(i);

    li.innerHTML = inputTask.value;
    console.log(main.appendChild(section));

});

