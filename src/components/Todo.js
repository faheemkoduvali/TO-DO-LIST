import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function Todo({todo,toggleComplete,removeTodo}) {

    function handleCheckBoxClick() {
        toggleComplete(todo.id)
    } 

    function handleRemove() {
        removeTodo(todo.id);
    }

    return (
        <div class="list-group-item d-flex justify-content-between align-items-center">
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id={todo.id} onClick={handleCheckBoxClick}/>
                <label class="custom-control-label" for={todo.id}></label>
            </div>
            <li
            class="list-group-item disabled"
            style={{
                color: "black",
                textDecoration: todo.completed ? "line-through" : null
            }}
            >{todo.task}</li>
            <button class="btn btn-outline-danger" onClick={handleRemove}>X</button>
        </div>
    )
}

export default Todo
