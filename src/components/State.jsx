import { useState } from "react";

export default function StateCounter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function resetCount() {
        setCount(0);
    }

    return(
        <div style={{borderStyle: 'solid', borderWidth:1, padding: 5}}>
            <button onClick={handleClick}>Count +</button>
            <button onClick={resetCount}>Reset</button>
            <p>Count: {count}</p>
        </div>
        
    );
}