import React from "react";
import "./Profile.css";

class Profile extends React.Component {
    render() {
        const [first, last] = this.props.name.split(" ", 2);
        return (
            <div className="Profile">
                <div className="circle">
                    {first[0]}
                    {last[0]}
                </div>
                <div className="details">
                    <div className="name">{this.props.name}</div>
                    <div className="title">{this.props.title}</div>
                </div>
            </div>
        );
    }
}

export default Profile;