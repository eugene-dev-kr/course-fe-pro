export default function TodoItem({todo, onToggle}) {
    return(
        <li className={`form-todo__item ${todo.done ? "done" : ""}`}
            onClick={() => {onToggle(todo.id)}}
        >
            <span>{todo.text}</span>
        </li>
    ) 
}