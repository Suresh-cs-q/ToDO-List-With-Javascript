let write = document.getElementById("write"); 
let todoList = document.getElementById("todo-list"); 

write.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        addTodo(this.value); 
        this.value = '';
    }
}); 

function addTodo(val) {
    let list = document.createElement("li");
    list.innerHTML = `${val}`; 
    todoList.appendChild(list);
}

