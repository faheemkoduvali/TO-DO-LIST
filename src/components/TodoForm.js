import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'

function TodoForm( {addTodo} ) {

const [todo, setTodo] = useState({
    id:'',
    task:'',
    completed: false
});

function handleInputChange(e) {
    setTodo({...todo,task: e.target.value})
}

function handleSubmit(e) {
    e.preventDefault()
    if (todo.task.trim()) {
        addTodo({...todo, id: uuid()})

        setTodo({...todo, task:""})
    }
}

    return (
        <div>
            <h5 style={{color:"black"}}>TO DO LIST</h5>
            <form class="form-inline" onSubmit={handleSubmit}>
                <div >
                <input 
                class="form-control"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleInputChange}
                />
                <button class="btn btn-outline-primary" type="submit">Submit</button>
                
                </div>

        </form>
        </div>
    )
}

export default TodoForm
