import React, { Component } from "react";

class JokeCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: "",
            isLoading: false,
            categories: [],
            category: ""

        };
    }
    componentDidMount() {
        console.log("componentDidMount");
        this.fetchCategories();
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    //     this.fetchJoke();
    // }
    fetchCategories = () => {
        fetch("https://api.chucknorris.io/jokes/categories")
            .then((res) => res.json())
            .then((jokeJson) => {
                this.setState({
                    categories: jokeJson
                });
            });
    };
    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`)
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
                <select
                    value={this.state.category}
                    onChange={(e) => this.setState({ category: e.target.value })}
                >
                    <option>Select a joke</option>
                    {this.state.categories.map((category, index) => {
                        return <option key={index}>{category}</option>;
                    })}
                </select>
                <button onClick={this._fetchJoke}>Submit!</button>
                <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p>
            </div>
        );
    }
}

export default JokeCategory;