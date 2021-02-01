import { Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
import App from '../component/app';
import Comp1 from './comp1';
import Comp2 from './comp2';
import comp3 from './comp3';
export default class MyRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Typography variant='h1'> My Router </Typography>
                <BrowserRouter>
                    <Link to="/one">HOME</Link>
                    <Link to="/two">ABOUT</Link>
                    <Link to="/three">CONTACT</Link>
                    <Route  exact  path="/" component={App} />
                    <Route path="/one" component={Comp1} />
                    <Route path="/two" component={Comp2} />
                    <Route path="/three" component={comp3} />
                </BrowserRouter>
            </div>
        )
    }
}