import React, { Component } from 'react';
import {text} from './Header.js';
import {heading} from './Header.js';

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>{this.props.heading}</h1>
                        <p className="lead">{this.props.text}</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn More</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;