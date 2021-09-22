import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AllBeers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
            isLoading: true
        }
    }
    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => this.setState({ beer: json, isLoading: false }))
    }
    render() {
        return (
            <div className="container-all footer">
                {!this.state.isLoading && this.state.beer.map(e =>
                    <figure key={e._id}>
                        <img src={e.image_url} alt="" />
                        <figcaption>
                            <h2>{e.name}</h2>
                            <h4>{e.tagline}</h4>
                            <p>Created by: {e.contributed_by}</p>
                            <Link to={`/all-beers/${e._id}`}>Details</Link>
                        </figcaption>
                    </figure>
                )}
                <Link to="/">
                    <div></div>
                </Link>
            </div>
        );
    }
}

export default AllBeers;