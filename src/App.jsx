import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
    const [todos, setTodos] = useState([]);


    function toogleTodo(id) {
        const newTodos = todos.map(todo => 
            todo.id === id ? {...todo, done: !todo.done} : todo
        );

        setTodos(newTodos);
    }

    function addTodo(text) {

        const newTodo = {
            id: Date.now(),
            text,
            done: false,
        }

        setTodos([...todos, newTodo]);
    }

    return(
        <div className="todo-wrapper">
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onToggle={toogleTodo} />
        </div>
        
    );
}

export default App
