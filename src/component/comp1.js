import React from 'react';
// import Lifecycle from './lifecycle';
export default class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: '',
            car: ''
        }
    }


    componentDidMount() {
        console.log("hello from comp did mount")
        // API call is made 
    }

    componentDidUpdate() {
        console.log("Hi from comp did update")
        // To get the latest data
    }

    componentWillUnmount() {
        console.log("hi from comp will unmount")
        // Record Some progress
    }

    handleCar = (event) =>{
        this.setState({
            car:event.target.value
        })
    }

    render() {
        console.log("hi from render")
        return (
            <div>
               
               Hello from comp1<br/>
                {/* <input onChange={(e) => {
                    this.setState({
                        a: e.target.value
                    })
                }}>
                </input> */}
                <label>Choose a car:</label>
                <select onChange={this.handleCar} name="cars" id="cars">
                    <optgroup label="Swedish Cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                    </optgroup>
                    <optgroup label="German Cars">
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </optgroup>
                </select>
                <br></br>
                <b>{this.state.car}</b>
            </div>
        )
    }
}