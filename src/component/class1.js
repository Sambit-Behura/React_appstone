import React, { Component } from 'react'
export default class Class1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'Girish'
        }
    }
	render(){
		return(
			<div>
			  <span> Hello World {this.state.name} </span>
			</div>
		  )
	}
}