import React from 'react';
export default class Styling extends React.Component{
    constructor(props){
        super(props);

        this.state={
            loggedIn: false

        }
    }

    render(){
        return(
            <div>
                {this.state.loggedIn === true?"You are Logged in":"You are Logged out"}
                <br/>
                {this.state.loggedIn === true && "you are Logged in"}

            </div>
        )
    }
}