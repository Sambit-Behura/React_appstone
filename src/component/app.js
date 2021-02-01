import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Button,
    Paper,
    Switch

} from '@material-ui/core';

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App(params) {

    const [darkMode, setDarkMode] = useState(false)

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? "dark" : "light"
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Paper style={{ height: "100vh" }}>
                <Grid container direction='column'>
                    <Typography variant='h1'> Dark Mode Edition </Typography>
                    <Button variant='contained' color='primary'>
                        Example1
                </Button>
                    <Button variant='contained' color='secondary'>
                        Example2
                </Button>

                <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)}/>
                </Grid>

            </Paper>
        </ThemeProvider>

    );
}

export default App 