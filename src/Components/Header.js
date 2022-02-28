import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar,Typography } from '@material-ui/core'
import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useHistory } from 'react-router-dom'


const Header = () => {

    const history = useHistory();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:"#fff",
            },
            type:"dark"
        },
    })

    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography onClick={() => history.push("/")}

                        variant='h6'
                            
                        style={{
                        flex:1,
                        fontSize: 20,
                        userSelect:'none',
                        cursor:'pointer',
                        fontWeight:'bold',
                        background: "-webkit-linear-gradient( #02aab0, #00cdac)",
                        webkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        }}> Cryptoverse
                        
                    </Typography>
                
                    <Select variant='outlined'
                        style={{
                        width: 100,
                        height: 40,
                        marginRight:15
                    }}>
                        <MenuItem value={"USD"}>USD</MenuItem>   
                        <MenuItem value={"INR"}>INR</MenuItem>   
                    </Select>
                    
                </Toolbar>
            </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header