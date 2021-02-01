import React from 'react';
import { 
    Button,
    TextField
 } from "@material-ui/core";
export default class MaterialComp extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            name:''

        }
    }

    handleChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleClick=()=>{
        alert("Welcome "+this.state.name +"Material UI");
        this.setState({
            name:''
        })
    }
    render(){
        return(
            <div>
                Hello From Material UI<br/>
                <TextField variant="filled" label="Name" color="primary" onChange={this.handleChange} /><br/>
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                    Material UI
                </Button>
            </div>
        )
    }
}