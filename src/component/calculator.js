import React from 'react';
// import "../style/style.css";
export default class Calculator extends React.Component{
    constructor(props){
        super(props);

        this.state={
            // num1:'',
            // num2:'',
            sum:0,
            div:0,
            sub:0,
            mult:0
        }
    }

    // handleNum1 = (e) => {
    //     this.setState({
    //         num1:e.target.value
    //     })
    // }

    // handleNum2 = (e) => {
    //     this.setState({
    //         num2:e.target.value
    //     })
    // }

    handleSum = (e) =>{
        this.setState({
            sum: parseInt(this.props.num1) + parseInt(this.props.num2),
            num1:this.props.num1,
            num2:this.props.num2
        })
        alert(parseInt(this.props.num1) + parseInt(this.props.num2))

    }

    
    handleSub = () =>{
        this.setState({
            sub: parseInt(this.props.num1) - parseInt(this.props.num2),
            num1:'',
            num2:'',
        })
        alert(parseInt(this.props.num1) - parseInt(this.props.num2))

    }

    handleMul = () =>{
        this.setState({
            mult: parseInt(this.props.num1) * parseInt(this.props.num2),
            num1:'',
            num2:'',
        })
        alert(parseInt(this.props.num1) * parseInt(this.props.num2))

    }

    handleDiv = () =>{
        this.setState({
            div: parseInt(this.props.num1) / parseInt(this.props.num2),
            num1:'',
            num2:'',
        })
        alert(parseInt(this.props.num1) / parseInt(this.props.num2))

    }
    handleReset = () =>{
        this.setState({
            sum:0,
            div:0,
            sub:0,
            mult:0 
            
        })

    }



    


    


     
    render(){
        return(
            <div>
                
                {/* <input className="input"
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
                <br /> */}

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

                <button className="btn" onClick={this.handleReset}>
                    RESET
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