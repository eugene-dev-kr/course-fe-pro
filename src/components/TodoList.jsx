import TodoItem from "./TodoItem";

export default function TodoList({todos, onToggle}) {
    return(
        <ul className="form-todo__list">
            {todos.map((t) => (
                <TodoItem 
                    key={t.id}
                    todo={t}
                    onToggle={onToggle}   
                />
            ))}
        </ul>
    )
}