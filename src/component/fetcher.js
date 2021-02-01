import { Grid, Paper, IconButton, Button, } from '@material-ui/core';
import React from 'react';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import BrushIcon from '@material-ui/icons/Brush';
import green from '@material-ui/core/colors/green';
import Icon from '@material-ui/core/Icon';
export default class Fetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [],
            color1: '#00FFFF',
            color2: '#740E93',
            color3: '#4C409C',
            color4: '#CACA29'

        }
    }


    handleClick1 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json())).
            then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color1: '#' + data.new_color
                })
            })
        
    }

    handleClick2 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json())).
            then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color2: '#' + data.new_color
                })
            })
        
    }

    handleClick3 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json())).
            then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color3: '#' + data.new_color
                })
            })
        
    }

    handleClick4 = () => {
        fetch('http://www.colr.org/json/color/random')
            .then((res) => (res.json())).
            then((data) => {
                console.log(data);
                console.log(data.new_color);
                this.setState({
                    color4: '#' + data.new_color
                })
            })
        
    }




    render() {
        return (
            <Paper elevation={3} style={{ margin: 'auto', alignItems: 'center' }}>
                <Grid container >
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color1, height: 100, marginRight: 40,marginLeft:80, marginBottom: 20 }}>
                        <IconButton onClick={this.handleClick1}>
                            <OfflineBoltIcon fontSize='large' style={{ color: green[500] }}>add_circle</OfflineBoltIcon>
                        </IconButton>

                    </Grid>
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color2, height: 100 }}>
                        <IconButton onClick={this.handleClick2}>
                            <ColorLensIcon fontSize='large' style={{ color: green[500] }}></ColorLensIcon>
                        </IconButton>

                    </Grid>
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color3, height: 100, marginRight: 40,marginLeft:80 }}>
                        <IconButton onClick={this.handleClick3}>
                            <BrushIcon fontSize='large' style={{ color: green[500] }}>add_circle</BrushIcon>
                        </IconButton>

                    </Grid>

                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color4, height: 100 }}>
                        <IconButton onClick={this.handleClick4}>
                            <FavoriteIcon fontSize='large' style={{ color: green[500] }}>add_circle</FavoriteIcon>
                        </IconButton>

                    </Grid>

                </Grid>
                {console.log(this.state.color)}
            </Paper>
        )
    }
}