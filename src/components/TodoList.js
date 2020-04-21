import React from 'react'
import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.css';

function TodoList({todos,toggleComplete,removeTodo}) {

    return (
        <ul class="list-group-flush">
            {todos.map(todo => (
                <Todo 
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList
