import React, { Component } from 'react'
export default class Class1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"Nexstacks"
        }
	}
	
	 handleName = (event) => {
		this.setState({
			name:event.target.value 
		});  
	}

	handleClick = () =>{
		this.setState({
			name:""
		});
	}

	render(){
		return(
			<div>
				<input type="text" value={this.state.name} onChange={this.handleName}  />
				<br />
				{this.state.name}
				<br />
				<button type="text" onClick={this.handleClick}>
					Reset!
				</button>

				<br />
			</div>
		  )
	}
}