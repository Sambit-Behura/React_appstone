
import React from "react";
import Class1 from "./class1"
export default class test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"akash gautam",
            age:23,
            status:"single",
            stat:"Nextstacks"
        }
    }

    handleStatus = (event) =>{
        this.setState({
            status:event.target.value

        });
    }


    render(){
        return(
            <div>
                <h2>
                    This is React Training by Akash Goutam Appstone pvt. limited
                </h2>

                <p>
                    <b>{this.state.name}</b>
                    <br />
                    Hello Sir This is <b><i>sambit kumar Behura</i></b> From ITER S'O'A University Odisha
                    I am studying in B.tech 3rd year CSE branch C.G.P.A=9.2, S.G.P.A=9.8
                    
                </p>

                <input type="text" value={this.state.status} onChange={this.handleStatus}/>

                <Class1 val={this.state.stat} />

            </div>
            
        
            
        )
    }
}