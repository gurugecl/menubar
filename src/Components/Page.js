import React, { Component } from 'react';
import {currentPage} from './Header.js';

class Page extends Component {
    render() {
        var pageContent;

        if(this.props.currentPage == 'home'){
            pageContent = 'This is the home page';
        } else if (this.props.currentPage == 'basics'){
            pageContent = 'This is the basics page';
        } else if (this.props.currentPage == 'forms'){
            pageContent = 'This is the forms page';
        } else if (this.props.currentPage == 'tables'){
            pageContent = 'This is the tables page';
        } else {
            pageContent = 'This is the home page';
        }

        return (
            <div>
                <div className="container">
                    <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
                    {pageContent}
                </div>
            </div>
        );
    }
}

export default Page;