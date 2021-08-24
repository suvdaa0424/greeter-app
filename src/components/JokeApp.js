import React, { Component } from "react";

class JokeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: "",
            isLoading: false
        };
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    //     this.fetchJoke();
    // }

    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            const url = 'https://api.chucknorris.io/jokes/random?category=dev';
            fetch(url)
                .then(response => response.json())
                .then(jokeJson => {
                    this.setState({
                        joke: jokeJson.value,
                        isLoading: false
                    }, () => {
                        console.log('New joke stored');
                    });
                })
        })
    }

    render() {
        console.log("render");
        return (
            <div>
                <h2>Jokes!</h2>
                <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }
}

export default JokeApp;