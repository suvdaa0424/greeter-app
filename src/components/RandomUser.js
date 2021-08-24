import React, { useEffect, useState } from "react";

function RandomUser() {
    const [user, setUser] = useState("");

    // equivalent to componentDidMount
    useEffect(() => {
        randomUser()
    }, []); // empty dependencies array means only run once
    function randomUser () {
        fetch("https://randomuser.me/api/?results=1")
            .then((res) => res.json())
            .then((data) => {
                setUser(data.results[0])
            });
        
}

if (!user) {
    return ""
}
    return (
        <div>
            <h2>User Information!</h2>
            <img src={user.picture.medium} alt="user picture" />
            <p>{user.name.first} {user.name.last}</p> 
            <p>{user.email}</p>

            <button onClick={() => randomUser()}>New user information!</button>
        </div>
    );
}

export default RandomUser; 