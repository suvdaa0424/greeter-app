import React, { useEffect, useState } from 'react'

function MagicEightBall() {
    const [question, setQuestion] = useState("");

    useEffect(() => {
        randomAnswer()
    }, []); // empty dependencies array means only run once
    function randomAnswer () {
        fetch("https://8ball.delegator.com/")
            .then((res) => res.json())
            .then((data) => {
                setQuestion(data.magic[0])
            });
        
}
if (!question) {
    return ""
}

    return (
        <div>
            hello
        
            <h2>hello!</h2>
            {question}
            <button onClick={() => randomAnswer()}>New!</button>

        </div>
    )
}

export default MagicEightBall
