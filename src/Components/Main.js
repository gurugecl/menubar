import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Basics from './Basics';
import Forms from './Forms';
import Tables from './Tables';

class Main extends Component {
    render() {
        const Main = () => (
            <Main>
                <Switch>
                    <Route exact path='./Home' component={Home}/>
                    <Route path='./Basics' component={Basics}/>
                    <Route path='./Forms' component={Forms}/>
                    <Route path='./Tables' component={Tables}/>
                </Switch>
            </Main>
        )
        return (
            <div className="Main">
                <Home />
                <Basics />
                <Forms />
                <Tables />
            </div>
        )}}

export default Main;
