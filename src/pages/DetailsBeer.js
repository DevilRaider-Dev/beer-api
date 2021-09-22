import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import backIcon from '../img/Back.jpg'

class DetailsBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
            isLoading: true
        }
    }
    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({ beer: json, isLoading: false }))
    }
    render() {
        return (
            <div className="container-item footer">
                {!this.state.isLoading &&
                    <figure>
                        <img src={this.state.beer.image_url} alt="" />
                        <figcaption>
                            <h1>{this.state.beer.name}</h1>
                            <h4>{this.state.beer.tagline}</h4>
                            <div>
                                <div><p>First brewed:</p><p>{this.state.beer.first_brewed}</p></div>
                                <div><p>Attenuation level:</p><p>{this.state.beer.attenuation_level}</p></div>
                            </div>
                            <p>{this.state.beer.description}</p>
                            <Link to="/all-beers"><img src={backIcon} alt="Back" /></Link>
                        </figcaption>
                    </figure>
                }
                <Link to="/">
                    <div></div>
                </Link>
            </div>
        );
    }
}

export default DetailsBeer;