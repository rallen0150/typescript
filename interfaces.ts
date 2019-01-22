// function showTodo(todo: {title: String, text: String}) {
//     console.log(todo.title+' - '+todo.text);
// }

let myTodo = {title: "Trash", text: "Take out trash"};

// showTodo(myTodo)

interface Todo {
    title: String;
    text: String;
}

function showTodo(todo: Todo) {
    console.log(todo.title+" - "+todo.text);
}

showTodo(myTodo);