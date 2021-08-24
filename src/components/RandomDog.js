import React, { Component } from "react";

class RandomDog extends Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            dogImage: ""
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.fetchDogImage();
    }

    fetchDogImage = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                console.log("fetched data");
                this.setState({
                    dogImage: data.message
                });
            });
    };

    render() {
        console.log("render");
        return (
            <div>
                <h2>Dogs!</h2>
                <img src={this.state.dogImage} alt="Amazing Dog, such a good boy." />
            </div>
        );
    }
}

export default RandomDog;