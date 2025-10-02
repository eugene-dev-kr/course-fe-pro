import { useState } from "react";

export default function TodoForm({onAdd}) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const trimmed = text.trim();
        if(!trimmed) return;

        onAdd(trimmed);
        setText('');
    }

    return(
        <form className='form-todo' onSubmit={handleSubmit}>
             <h1>TodoList</h1>
            <input
                type="text"
                placeholder="Нова задача..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            <button type="submit">Додати</button>
        </form>
    )
}