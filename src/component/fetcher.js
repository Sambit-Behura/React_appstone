import { Grid, Paper, IconButton, Button, Typography } from '@material-ui/core';
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
            proxyUrl: 'https://whispering-tor-04671.herokuapp.com/',
            apiUrl: 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json',
            color1: '#00FFFF',
            color2: '#740E93',
            color3: '#4C409C',
            color4: '#CACA29',
            fact: '',
            author: ''

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
            <Paper elevation={3} style={{
                margin: 0, alignItems: 'center', backgroundSize: "cover",
                height: "100vh", backgroundImage: 'linear-gradient(to right, rgb(185, 180, 197), rgb(25, 32, 24))'
            }}>
                <Grid container >
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color1,borderRadius: 20, height: 100, marginRight: 40, marginLeft: 80, marginBottom: 20, marginTop: 20 }}>
                        <IconButton onClick={this.handleClick1}>
                            <OfflineBoltIcon fontSize='large' style={{ color: green[500] }}>add_circle</OfflineBoltIcon>
                        </IconButton>

                    </Grid>
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color2, height: 100, borderRadius: 20,marginTop: 20 }}>
                        <IconButton onClick={this.handleClick2}>
                            <ColorLensIcon fontSize='large' style={{ color: green[500] }}></ColorLensIcon>
                        </IconButton>

                    </Grid>
                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color3, height: 100, marginRight: 40, marginLeft: 80,borderRadius: 20 }}>
                        <IconButton onClick={this.handleClick3}>
                            <BrushIcon fontSize='large' style={{ color: green[500] }}>add_circle</BrushIcon>
                        </IconButton>

                    </Grid>

                    <Grid item lg={5} sm={12} md={6} style={{ backgroundColor: this.state.color4, height: 100,borderRadius: 20 }}>
                        <IconButton onClick={this.handleClick4}>
                            <FavoriteIcon fontSize='large' style={{ color: green[500] }}>add_circle</FavoriteIcon>
                        </IconButton>

                    </Grid>

                </Grid>
                <Button onClick={() => {
                    {
                        fetch(this.state.proxyUrl + this.state.apiUrl)
                            .then(res => res.json()).
                            then((data) => {
                                console.log(data);
                                console.log(data.quoteText)
                                this.setState({
                                    fact: '"' + data.quoteText + '"',
                                    author: data.quoteAuthor
                                },
                                    () => {
                                        {
                                            this.state.author.length === 0 &&
                                            this.setState({
                                                author: 'Sambit Kumar Behura'
                                            })
                                        }
                                    })
                            })
                    }
                }} variant="contained" color="primary" style={{ marginLeft: 570, marginTop: 100, marginBottom: 80 }}>
                    THOUGHTS
                </Button>
                <Typography variant="h6" gutterBottom>
                    {this.state.fact != 0 &&
                        <Paper elevation={3} style={{ marginLeft: 20, marginRight: 20, fontSize: 30, marginBottom: 20, backgroundImage: 'linear-gradient(to right, rgb(79, 76, 87), rgb(221, 222, 227))', borderRadius: 20 }}>
                            {this.state.fact}<br />
                        -By {this.state.author}

                        </Paper>
                    }
                </Typography>

            </Paper>
        )
    }
}