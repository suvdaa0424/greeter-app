import React, { useState } from "react";
import "./Counter.css";

function CounterFunc() {
    // useState gives back a piece of state and a function to
    // update that piece of state.
    const [count, setCount] = useState(42);

    // functions are defined inside the component
    function updateCount(num) {
        // use the 'setX' function from the useState hook to update
        // state, which will cause a re-render
        setCount(count + num);
    }

    return (
        <div className="Counter">
            <button onClick={() => updateCount(-1)}>-1</button>
            <button onClick={() => updateCount(-10)}>-10</button>
            <button onClick={() => updateCount(-50)}>-50</button>
            {/* use piece of state in return */}
            <span>{count}</span>
            {/* because other fns are defined inside functional component
            they don't need `this.` at the front as they are in the same
            scope */}
            <button onClick={() => updateCount(50)}>+50</button>
            <button onClick={() => updateCount(10)}>+10</button>
            <button onClick={() => updateCount(1)}>+1</button>
        </div>
    );
}

export default CounterFunc;