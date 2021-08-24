import React from "react";

// props are passed directly to the function
function GreeterFunc(props) {
    // render function is replaced with just return
    return (
        <div>
            {/* Props are used in the return statement without the 'this' keyword */}
            <h2>Hello, {props.name}!</h2>
        </div>
    );
}

export default GreeterFunc;