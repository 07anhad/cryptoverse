import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar,Typography } from '@material-ui/core'
import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';


const Header = () => {

    const history = useHistory();

    const { currency, setCurrency } = CryptoState();
    
    console.log(currency);

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
                        fontSize: 24,
                        userSelect:'none',
                        cursor:'pointer',
                        fontWeight: 'bold',
                        // color:"cyan",
                        background: 'linear-gradient(#FE6B8B 30%, #FF8E53 90%)',
                        webkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        }}> Cryptoverse
                        
                    </Typography>
                
                    <Select variant='outlined'
                        style={{
                        width: 100,
                        height: 40,
                        marginRight:15
                        }}
                        value={currency}
                        onChange={(e)=>setCurrency(e.target.value)}
                    >
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