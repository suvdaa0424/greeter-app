import React, { useState } from 'react';

// step 2 - write code for component
function StatusFunc() {
    
    const [status, setStatus] = useState("Active")
        
        return (
            <div>
            <h2>{status}</h2>
            <button onClick={() => setStatus("Active")}>Active</button>
            <button onClick={() => setStatus("Away")}>Away</button>
            <button onClick={() => setStatus("Offline")}>Offline</button>
            </div>
        )
    }
export default StatusFunc;