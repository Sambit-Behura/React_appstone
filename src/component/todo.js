/* eslint-disable */

import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UndoIcon from '@material-ui/icons/Undo';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
    Button,
    TextField,
    Grid,
    Typography,
    Paper,
    Switch
} from "@material-ui/core";
export default class Arrays_Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksArr: [],
            taskInput: "",
            tasksCompleted: []

        }
    }
    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })
    }
    pushTask = () => {
        var temp = this.state.tasksArr;
        temp.push(this.state.taskInput)
        this.setState({
            tasksArr: temp,
            taskInput: ""
        })
    }
    handleComplete = (e, index) => {
        var temp = this.state.tasksArr;
        var ele = temp.splice(index, 1);
        var temp2 = this.state.tasksCompleted;
        temp2.push(ele[0])
        console.log(ele[0]);
        this.setState({
            tasksArr: temp,
            tasksCompleted: temp2
        })
    }

    handleUndo = (e, index) => {
        var temp = this.state.tasksCompleted;
        var ele = temp.splice(index, 1);
        var temp2 = this.state.tasksArr;
        temp2.push(ele[0])
        console.log(ele[0]);
        this.setState({
            tasksArr: temp2,
            tasksCompleted: temp
        })
    }
    handleDelete = () => {
        this.setState({
            tasksCompleted: []
        })
    }

    handleEnter = (e) => {
        var code = e.keyCode || e.which;
        if (code === 13) {
            this.pushTask()

        }

    }


    render() {
        // const [darkMode, setDarkMode] = useState(false)

        // const theme = createMuiTheme({
        //     palette: {
        //         type: darkMode ? "dark" : "light"
        //     },
        // });
        return (
            // <ThemeProvider theme={theme}>
                <Paper style={{ height: "100vh" }}>
                    <Grid container direction='column'>

                        <div style={{ justifyContent: 'center', alignItems: 'center', margin: 'auto' }} >
                            <Typography variant="h2">Arrays Assignment!!!</Typography>
                            <TextField size="small" variant="filled" label="Enter Task" color="secondary" style={{ borderRadius: 10, height: 20, width: 175, outline: "none", marginRight: 20, marginBottom:20 }} placeholder="Enter The Task" value={this.state.taskInput} onChange={this.handleInput} onKeyPress={this.handleEnter} />
                            <Button color="secondary" variant="contained" disabled={this.state.taskInput === "" ? true : false} onClick={this.pushTask}>
                                <AddCircleIcon />
               </Button>

                            {this.state.tasksArr.length === 0 ?
                                <Typography variant="h4" style={{marginTop:20}}>You have No tasks to do</Typography> :
                                <Typography variant="h4" style={{marginTop:20}}>Tasks to do</Typography>}
                            <div style={{
                                backgroundColor: "#f2f2f2",
                                padding: 20,
                                borderRadius: 10,
                                width: 200,
                                justifyContent: "center",
                                alignItems: "center",
                                display: 'flexbox'
                            }}>
                                <ul style={{
                                    padding: 20,
                                    borderRadius: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: 'flexbox'
                                }}>
                                    {this.state.tasksArr.map((single, index) => {
                                        return (
                                            <li>
                                                {single}<br /><Button color="primary" variant="contained" onClick={(e) => {
                                                    this.handleComplete(e, index, single)
                                                }}><CheckCircleIcon/></Button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            {this.state.tasksCompleted.length === 0 ?
                                <Typography variant="h4">No Task Pending</Typography> :
                                <Typography variant="h4">Tasks Completed</Typography>}
                            <div style={{
                                backgroundColor: "#f2f2f2",
                                padding: 20,
                                borderRadius: 10,
                                width: 200,
                                justifyContent: "center",
                                alignItems: "center",
                                display: 'flexbox'
                            }}>
                                <ul style={{
                                    padding: 20,
                                    borderRadius: 10,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: 'flexbox'
                                }}>
                                    {this.state.tasksCompleted.map((single, index) => {
                                        return (
                                            <li>
                                                {single}<br /><Button color="primary" variant="contained" onClick={(e) => {
                                                    this.handleUndo(e, index)
                                                }}><UndoIcon/></Button>
                                            </li>
                                        )
                                    })}


                                </ul>
                                {
                                    this.state.tasksCompleted.length > 0 &&
                               
                                <Button color="primary" variant="contained" onClick={(e) => {
                                    this.handleDelete(e)
                                }}><DeleteIcon/>bit</Button>
                            }

                            </div>
                        </div>
                        <Switch/>
                        {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
                    </Grid>

                </Paper>
            // </ThemeProvider >


        )
    }
}