/*function submitForm(){*/
    const buttonAdd = document. querySelector ('.button-add');
    
    buttonAdd.addEventListener('click', () => {
        document.querySelector('.cleanbtn').disabled = false;
        //document.querySelector('.notasks').remove();
        document.querySelector('.notasks').style.display = "none";
        let addNewTask = document.getElementById('task-list'); // вызов по id
        
        let taskList = document.createElement('li'); // создание нового элемента для ввода задачи
        taskList.classList.add('task'); //присваивание ему класса
        addNewTask.append(taskList);// добавление его к блоку 
        let task = document.getElementById('taskentry').value;// значение ввода из input
        taskList.textContent = task; // вывод задачи в лист

        const chbox = document.createElement("input");
        chbox.type = "checkbox";
        chbox.classList.add('taskchbox');
        taskList.append(chbox);
        });    
