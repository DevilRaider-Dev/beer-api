import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import imgBgAll from '../img/bg-all.jpg'
import imgBgRnd from '../img/bg-rnd.jpg'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="container-home-all">
                    <figure>
                        <Link to="/all_beers">
                            <img src={imgBgAll} alt="All Beers" />
                        </Link>
                        <figcaption>
                            <h1>All Beers</h1>
                            <h4>Discover Beers they are crafted around the World.</h4>
                        </figcaption>
                    </figure>
                </div>
                <div className="container-home-rnd">
                    <figure>
                        <Link to="/random_beers">
                            <img src={imgBgRnd} alt="Random Beers" />
                        </Link>
                        <figcaption>
                            <h1>Random Beer</h1>
                            <h4>Discover a Random Beer they are crafted around the World.</h4>
                        </figcaption>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Home;