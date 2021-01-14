import React from 'react';
export default class Arrays extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    name: " Sambit ",
                    Domain: "React JS"
                },

                {
                    name: "Ansukun",
                    Domain: "Node JS"
                },
                {
                    name: "Ansumun",
                    Domain: "Angular JS"
                }
            ]
        }
    }

    handleInput1 = (e) => {
        this.setState({
            name: e.target.value,

        })
    }

    handleInput2 = (e) => {
        this.setState({
            Domain: e.target.value,
        })
    }

    handlePush = () => {
        var temp = this.state.arr;
        temp.push({
            name: this.state.name,
            Domain: this.state.Domain
        })
        this.setState({
            arr: temp,
            name: "",
            Domain: ""
        })

    }

    handlePop = () => {
        var temp = this.state.arr;
        temp.pop();
        this.setState({
            arr: temp
        })
    }

    handleDelete = (e, index) => {
        var temp=this.state.arr
        temp.splice(index,1)
        this.setState({
            arr:temp
        })

    }



    render() {
        return (
            <div>
                <h3>Staff List</h3>
                {this.state.arr.map((single, index) => {
                    return (
                        <div>
                            {single.name} Working on {single.Domain}<button onClick={(e) => {
                                        this.handleDelete(e, index)
                                    }}>Delete</button>
                                
                        </div>
                    )
                })}

                <input placeholder="Enter The name" value={this.state.name} onChange={this.handleInput1} />
                <input placeholder="Enter the Domain" value={this.state.Domain} onChange={this.handleInput2} />
                <button disabled={this.state.name === ""?true:false} onClick={this.handlePush}>
                    PUSH
                </button>
                <button onClick={this.handlePop}>
                    POP
                </button>



            </div>
        )
    }
}