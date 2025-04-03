import React, { useState,useRef } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0);
    const ref = useRef(0);

    const handleState = () => {
        setCounter((prev) => prev + 1);
        console.log(counter);
    }

    const handleRef = () => {
        ref.current += 1;
        console.log(ref.current);
    }


    return (
        <div>
            <button
                onClick={handleState}
            >Click Me</button>
            {"Counter : "+ counter}
            {"Ref : "+ ref.current}
            <button
                onClick={handleRef}
            >Press me</button>
        </div>
    )
}

export default Counter
