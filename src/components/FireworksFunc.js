import React, { useState } from 'react';

function FireworksFunc() {
    const [fire, setFire] = useState("🧨")
        return (
            <div>
            <button onClick={() => setFire(!fire)}>{fire ? '🧨' : '💥'}</button>
            </div>
        )
    }

export default FireworksFunc;