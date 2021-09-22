import React, { Component } from 'react';

class RandomBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
            isLoading: true
        }
    }
    componentDidMount() {
        console.log('Counter is alive')
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => response.json())
            .then(json => this.setState({ beer: json, isLoading: false }))
            .then(console.log(this.beer))
    }
    render() {
        return (
            <div className="container-rnd"><h1>Random</h1></div>

        );
    }
}

export default RandomBeer;

