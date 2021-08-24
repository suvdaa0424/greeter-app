import React, { Component } from "react";

class RandomDogImage extends Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            dogImage: "",
            breeds: [],
            breed: ""
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.fetchBreeds();
    }

    fetchBreeds = () => {
        fetch("https://dog.ceo/api/breeds/list")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    breeds: data.message
                });
            });
    };

    fetchDogImage = () => {
        fetch(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
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
                <select
                    value={this.state.breed}
                    onChange={(e) => this.setState({ breed: e.target.value })}
                >
                    <option>Select a breed</option>
                    {this.state.breeds.map((breed, index) => {
                        return <option key={index}>{breed}</option>;
                    })}
                </select>
                <button onClick={this.fetchDogImage}>Fetch!</button>
                <br />
                <img src={this.state.dogImage} alt="Amazing Dog, such a good boy." />
            </div>
        );
    }
}

export default RandomDogImage;