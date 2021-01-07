import React from 'react';
export default class Calculator extends React.Component{
    constructor(props){
        super(props);

        this.state={
            num1:'',
            num2:'',
            sum:0,
            div:0,
            sub:0,
            mult:0
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

    handleSum = () =>{
        this.setState({
            sum: parseInt(this.state.num1) + parseInt(this.state.num2)
        })

    }

    
    handleSub = () =>{
        this.setState({
            sub: parseInt(this.state.num1) - parseInt(this.state.num2)
        })

    }

    handleMul = () =>{
        this.setState({
            mult: parseInt(this.state.num1) * parseInt(this.state.num2)
        })

    }

    handleDiv = () =>{
        this.setState({
            div: parseInt(this.state.num1) / parseInt(this.state.num2)
        })

    }

    handleClc = () =>{
        this.setState({
            num1:'',
            num2:'',
            sum:0,
            div:0,
            sub:0,
            mult:0
            
        })

    }

    


    


     
    render(){
        return(
            <div>
                <h1 >MY CALCULATOR</h1>
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

                <button onClick={this.handleSum}>
                    ADD
                </button> 
                <br /> 
                <button onClick={this.handleSub}>
                    SUBSTRACT
                </button> 
                <br />

                <button onClick={this.handleMul}>
                    MULTIPLY
                </button> 
                <br />

                <button onClick={this.handleDiv}>
                    DIVIDE
                </button> 
                <br />

                
                <button onClick={this.handleClc}>
                    CLEAR
                </button> 
                <br />

                SUMMATION={this.state.sum} <br /> 
                SUBSTRACTION={this.state.sub}<br />
                MULTIPLICATION={this.state.mult}<br />
                DIVISION={this.state.div}<br />            
            </div>
        )
    }
}