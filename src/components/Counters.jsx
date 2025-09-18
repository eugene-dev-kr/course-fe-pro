import { useState } from "react";

export default function Counters() {
    return(
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return(
        <div>
            <button onClick={handleClick}>Click count</button>
            <p>Count 1: {count}</p>
        </div>
        
    );
}