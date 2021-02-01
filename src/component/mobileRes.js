import React from 'react';
import { Paper, Grid, IconButton, Icon, Button } from '@material-ui/core'
export default class MobileRes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Paper>
                <Grid container >
                    <Grid item lg={4} sm={12} md={6} style={{ backgroundColor: "red", height: 100, marginRight:20, marginBottom:20 }}>

                    </Grid>
                    <Grid item lg={4} sm={12} md={6} style={{ backgroundColor: "green", height: 100 }}>

                    </Grid>
                    <Grid item lg={4} sm={12} md={6} style={{ backgroundColor: "blue", height: 100 ,marginRight:20}}>

                    </Grid>

                    <Grid item lg={4} sm={12} md={6} style={{ backgroundColor: "gray", height: 100 }}>

                    </Grid>

                </Grid>
            </Paper>
        )
    }
}