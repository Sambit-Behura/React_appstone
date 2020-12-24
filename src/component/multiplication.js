import React from 'react';
export default class Mult extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            num1:'',
            num2:'',
            multiplication:0 

        }
    }
    
    handleNum1 = (e) => {
        this.setState({
            num1:e.target.value
        })
    }

    handleNum2 = (e) => {
        this.setState({
            num2:e.target.value
        })
    }

    handleMul = () =>{
        this.setState({
            multiplication: parseInt(this.state.num1) * parseInt(this.state.num2)
        })

    }
    
    
    
    
    render(){
        return(
            <div>
                <br />
                <input
                    placeholder="enter a number"
                    value={this.state.num1}
                    onChange={this.handleNum1}
                /> 

                <br /> 

                <input
                    placeholder="enter a number"
                    value={this.state.num2}
                    onChange={this.handleNum2}
                /> 
                <br />

                <button onClick={this.handleMul}>
                    MULTIPLY
                </button> 
                <br /> 

                MULTIPLICATION={this.state.multiplication}             
            </div>
        )
    }
}