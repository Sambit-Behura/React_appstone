import React from 'react';
import Calculator from './calculator'
export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: '',
            num2: '',

        }
    }

    handleNum1 = (e) => {
        this.setState({
            num1: e.target.value
        })
    }

    handleNum2 = (e) => {
        this.setState({
            num2: e.target.value
        })
    }

    handleClc = () =>{
        this.setState({
            num1:'',
            num2:'',
            
        })

    }

    render() {
        return (
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

                <Calculator num1={this.state.num1} num2={this.state.num2} />
                <button className="btn" onClick={this.handleClc}>
                    CLEAR
                </button><br /> 

            </div>
        )
    }
}