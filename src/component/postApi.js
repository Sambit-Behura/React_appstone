import React from "react";
import {Avatar, Card, CardContent, Paper, Snackbar, Button, TextField, Typography, IconButton } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";


export default class PostApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            snackbarmessage: 'hello sambit',
            snackbaropen: false,
            login: false
        }
    }

    toggleTheme = () => {
        this.setState({
            dark: !this.state.dark
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    snackbarClose = (event) => {
        this.setState({
            snackbaropen: false
        })
    }

    handleLogin = () => {
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: this.state.password,
                email: this.state.email
            })

        })
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson)
                if (resJson.id) {
                    this.setState({
                        snackbarmessage: "User Created Succesfully",
                        login: true,
                        snackbaropen: true,
                        email: '',
                        password: ''

                    })
                }
                else {
                    this.setState({
                        snackbarmessage: "Authentication Failed",
                        login: true,
                        snackbaropen: true,
                        email: '',
                        password: '',
                    })
                }
            })
    }


    render() {
        return (
            <ThemeProvider
                theme={createMuiTheme({
                    palette: {
                        type: this.state.dark ? "dark" : "light"
                    }
                })}
            >  
                    
                          <Paper elevation={3} style={{
                margin: 0, alignItems: 'center', display: 'flexbox', backgroundSize: "cover",
                height: "100vh",
            }}>
                    <Button onClick={this.toggleTheme}>
                        {this.state.dark ? (
                            <BrightnessHighIcon />
                        ) : (
                                <Brightness4Icon />
                            )}
                        {this.state.dark ? "LIGHT MODE" : "DARK MODE"}
                    </Button>
                            {this.state.login===false?
                    <Card style={{ width: 400, margin: 'auto', marginTop: 150 }}>

                        <CardContent>
                            <Typography variant="h6">Add User</Typography>

                            <TextField fullWidth type="email" variant='outlined' margin="dense" value={this.state.email} onChange={this.handleEmail} label="email" required />

                            <TextField fullWidth variant='outlined' margin="dense" value={this.state.password} onChange={this.handlePassword} label="Password" type="password" required />

                            <Button variant="contained" color="secondary" fullWidth onClick={this.handleLogin} disabled={this.state.password.length === 0 || this.state.email.length === 0 ? true : false}>
                                Create User
                        </Button>
                        </CardContent>
                    </Card>
    
                   :

                    <Snackbar
                    

                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={this.state.snackbaropen}
                        autoHideDuration={6000}
                        onClose={this.snackbarClose}
                        message={<span style={{textAlign:'center',justifyContent:'center'}}> <Avatar >
                        <AssignmentIcon />
                      </Avatar>{this.state.snackbarmessage}</span>}
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.snackbarClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
    }
                </Paper>


            </ThemeProvider>
        )
    }
}