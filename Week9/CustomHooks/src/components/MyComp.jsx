import React , {useState} from "react";

export function MyComponent(){
    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
        setCount(count+1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}