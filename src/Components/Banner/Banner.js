import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner.jpeg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        // opacity:0.4,
        justifyContent:"space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign:"center"
    }
}))

const Banner = () => {
    const classes = useStyles();
  return (
      <div className={classes.banner}>
          <Container className={classes.bannerContent}>
              <div className={classes.tagline}>
                <Typography
                      variant="h2"
                      style={{
                          fontWeight: "bold",
                          color:"#099FFF",
                          marginBottom: 15,
                          fontFamily:"montserrat"
                          
                      }}  

                  > 
                      Cryptoverse
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    style={{
                        color: "darkgray",
                        textTransform: "capitalize",
                        fontFamily:"montserrat"
                          
                    }}
                  >
                      Get all the info regarding your favorite crypto currencies

                  </Typography>
              </div>
          </Container>
          
    </div>
  )
}

export default Banner