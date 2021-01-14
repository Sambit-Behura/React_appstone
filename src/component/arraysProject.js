import React from 'react';
export default class Arrays_Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksArr: ["React js"],
            taskInput: ""

        }
    }
    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })
    }
    pushTask = () => {
        var temp = this.state.tasksArr
        temp.push(this.state.taskInput)
        this.setState({
            tasksArr: temp,
            taskInput: ""
        })
    }
    handleComplete = (e, index) => {
        var temp = this.state.tasksArr
        temp.splice(index, 1)
        this.setState({
            tasksArr: temp
        })

    }


    render() {
        return (
            <div >
                <h4>Arrays Assignment!!!</h4>
                <input placeholder="Enter The Task" value={this.state.taskInput} onChange={this.handleInput} />
                <button disabled={this.state.taskInput === "" ? true : false} onClick={this.pushTask}>
                    Add Task
               </button>

                {this.state.tasksArr.length === 0 ?
                    <h2>You have No tasks to do</h2> :
                    <h2>Tasks to do</h2>}
                <div style={{
                    backgroundColor: "#f2f2f2",
                    padding: 20,
                    borderRadius: 10,
                    width: 200
                }}>
                    <ul>
                        {this.state.tasksArr.map((single, index) => {
                            return (
                                <li>
                                    {single}<button onClick={(e) => {
                                        this.handleComplete(e, index)
                                    }}>Completed</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}