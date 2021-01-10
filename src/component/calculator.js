import React from 'react';
import "../style/style.css";
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
                <input className="input"
                    placeholder="enter a number"
                    value={this.state.num1}
                    onChange={this.handleNum1}
                /> 

                <br /> 

                <input className="input2"
                    placeholder="enter a number"
                    value={this.state.num2}
                    onChange={this.handleNum2}
                /> 
                <br />

                <button className="btn" onClick={this.handleSum}>
                    +
                </button> <br /> 
                <button className="btn" onClick={this.handleSub}>
                    -
                </button> <br />

                <button className="btn" onClick={this.handleMul}>
                    X
                </button> <br />

                <button className="btn" onClick={this.handleDiv}>
                    /
                </button> <br />
                <button className="btn" onClick={this.handleClc}>
                    CLEAR
                </button><br /> 
                <center>
                    <table border="3">
                        <tr>
                            <th>SUMMATION</th>   
                            <th>SUBSTRACTION</th> 
                            <th>MULTIPLICATION</th>
                            <th>DIVISION</th>
                        </ tr>
                        <tr>
                            <td>{this.state.sum}</td>
                            <td>{this.state.sub}</td>
                            <td>{this.state.mult}</td>
                            <td>{this.state.div}</td>

                        </tr>
                    </table > 
                </center> 
                
                        
            </div>
        )
    }
}