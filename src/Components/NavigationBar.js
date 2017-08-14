import React, { Component } from 'react';
import { Navbar } from './bootstrap.css';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

class NavigationBar extends Component {
    change(page){
        this.props.change(page);
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <div id="navbar">
                        {/*<ul className="nav navbar-nav">*/}
                            {/*<li className={(this.props.currentPage === 'home') ? 'active': ''}><a onClick={this.change.bind(this,'home')}  href="#">Home</a></li>*/}
                            {/*<li className={(this.props.currentPage === 'basics') ? 'active': ''}><a onClick={this.change.bind(this,'basics')} href="#">Basics</a></li>*/}
                            {/*<li className={(this.props.currentPage === 'forms') ? 'active': ''}><a onClick={this.change.bind(this,'forms')} href="#">Forms</a></li>*/}
                            {/*<li className={(this.props.currentPage === 'tables') ? 'active': ''}><a onClick={this.change.bind(this,'tables')} href="#">Tables</a></li>*/}
                            {/*<img src={logo} className="App-logo pullRight" alt="logo" />*/}
                        {/*</ul>*/}
                        <ul className="nav navbar-nav">
                            <li><Link to='./Home'>Home</Link></li>
                            <li><Link to='./Basics'>Basics</Link></li>
                            <li><Link to='./Forms'>Forms</Link></li>
                            <li><Link to='./Tables'>Tables</Link></li>
                            <img src={logo} className="App-logo pullRight" alt="logo" />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;
