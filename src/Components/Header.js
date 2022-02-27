import { AppBar, Container, MenuItem, Select, Toolbar,Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Header = () => {

    const history = useHistory 

    return (
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography onClick={() => history.push("/")} 
                    
                    style={{
                    fontSize: 20,
                    cursor:'pointer',
                    fontWeight:'bold',
                    background: "-webkit-linear-gradient(45deg, #02aab0 30%, #00cdac 90%)",
                    webkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    }}> Cryptoverse
                        
                </Typography>
                
                    <Select variant='outlined'
                        style={{
                        width: 100,
                        height: 40,
                        marginLeft:15
                }}>
                        <MenuItem value={"USD"}>USD</MenuItem>   
                        <MenuItem value={"INR"}>INR</MenuItem>   
                </Select>
                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header