import React from 'react';
import { TextField, Button, Card, CardContent, Typography } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
export default class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedin:false
        }
    }

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

    handleLogin = () => {
        if(this.state.email==='sambitkumarbehura2015@gmail.com' && this.state.password==='Sambit@7884'){
            this.setState({
                loggedin:true
            })
        }
    }

    render() {
        if(this.state.loggedin===true){
            return <Redirect to='/'/>
        }
        return (
            <div>

                <Card style={{ width: 400, margin: 'auto' }}>
                    <CardContent>
                        <Typography variant="h6">Login Page</Typography>
                        <TextField fullWidth type="email" variant='outlined' margin="dense" value={this.state.email} onChange={this.handleEmail} label="email" />
                        <TextField fullWidth type="password" variant='outlined' margin="dense" value={this.state.password} onChange={this.handlePassword} label="Password" />
                        <Button variant="contained" color="secondary" fullWidth onClick={this.handleLogin}>
                            Log In
                        </Button>
                    </CardContent>
                </Card>


            </div>
        )
    }
}