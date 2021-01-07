import React from 'react';
export default class Arrays extends React.Component{
    constructor(props){
     super(props)
        this.state = {
            arr: [
                {
                    name:" Sambit ",
                    address:"sukinda"    
                },

                {
                    name:" Mikun",
                    address:"jarka"
                }
            ]
        }  
    }

    handlePush = () => {
        var temp = this.state.arr;
        
    }
    
    
    render(){
        return(
            <div>
                Hello this is
                {this.state.arr.map( (single,index) =>{
                    return (
                        <div>
                            {single.name} from {single.address}
                        </div>
                    )
                }) }

                <button onClick={this.handlePush}>
                   PUSH
                </button>
            </div>
        )
    }
}