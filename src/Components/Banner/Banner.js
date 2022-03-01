import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
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
        opacity:0.4,
        justifyContent:"space-around",
    }
}))

const Banner = () => {
    const classes = useStyles();
  return (
      <div className={classes.banner}>
          <Container className={classes.bannerContent}></Container>
          
    </div>
  )
}

export default Banner