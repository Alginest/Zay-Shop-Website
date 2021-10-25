import React from 'react'
import { makeStyles, Grid, Container } from '@material-ui/core'
import Slider from './slider/Slider'
import Info from './Info/Info'
import Related from './related/Related'
const useStyles = makeStyles((theme) => ({
  single: {
    backgroundColor: '#e9eef5',
    height: 1000,
    [theme.breakpoints.down('md')]: {
      height: 1200,
    },
    [theme.breakpoints.down('sm')]: {
      height: 1900,
    },
    [theme.breakpoints.down('xs')]: {
      height: '2400px',
    },
  },
  container: {
    height: 'auto',
  },
  slider: {
    height: '900px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))
const Single = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.single}>
        <Container className={classes.container} spacing={5}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={classes.slider}>
              <Slider />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Info />
            </Grid>
          </Grid>
        </Container>
      </section>
      <Related />
    </>
  )
}

export default Single
