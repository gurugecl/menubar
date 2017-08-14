import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Page from './Page';
import NavigationBar from "./NavigationBar";
import {brand} from './NavigationBar.js';

class Header extends Component {

    handleChange = (page) => {
        this.setState({currentPage:page});
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            currentPage: 'home'
        }
    }

    static get defaultProps() {
        return {
            brand: 'ReactTemplate',
            heading: 'Hello Students',
            text: 'Welcome to this template to learn ReactJS!'
        }
    }

    render() {
        var jumbotron;
        if(this.state.currentPage == 'home'){
            jumbotron = <Jumbotron heading={this.props.heading} text={this.props.text} />;
        } else {
            jumbotron = '';
        }
        return (
            <div>
                <NavigationBar currentPage={this.state.currentPage} brand={this.props.brand} change={this.handleChange} />
                {jumbotron}
                <Page currentPage={this.state.currentPage} />
            </div>
        );
    }
}

export default Header;