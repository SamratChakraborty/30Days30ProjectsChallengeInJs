let todoList = [
    {
        item:'samrat', 
        dueDate:'28/11/2023'
    }, 
    {
        item:'sam', 
        dueDate:'28/11/2023'
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-element');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item, dueDate} = todoList[i];
        newHtml += `
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
}