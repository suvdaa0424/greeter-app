import React, { useState } from 'react'
import Aesthetically from 'aesthetically'

export default function FancyText() {
    const [text, setText] = useState('')
    const fancyText = Aesthetically.format(`${text}`, "double-struck");
    return (
        <div>
            <h2>Fancy Text</h2>
            <input value={text} onChange={(e) => setText(e.target.value) }/>
            <p>{fancyText}</p>
        </div>
    )
}
