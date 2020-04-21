import React,{useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos] = useState([])
  

  function addTodo(todo) {
    setTodos([todo,...todos])
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ... todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <TodoList 
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
