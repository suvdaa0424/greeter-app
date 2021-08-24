import React from "react";
import "./Profile.css";

function ProfileFunc(props) {
        const [first, last] = props.name.split(" ", 2);
        return (
            <div className="Profile">
                <div className="circle">
                    {first[0]}
                    {last[0]}
                </div>
                <div className="details">
                    <div className="name">{props.name}</div>
                    <div className="title">{props.title}</div>
                </div>
            </div>
        );
    }

export default ProfileFunc;