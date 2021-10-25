import React from 'react'
import { Container, makeStyles, Typography, Grid } from '@material-ui/core'
import brandOne from '../../../img/brand_01.png'
import brandTwo from '../../../img/brand_02.png'
import brandThree from '../../../img/brand_03.png'
import brandFour from '../../../img/brand_04.png'
import { Link } from '@mui/material'
const useStyles = makeStyles((theme) => ({
  ourServices: {
    height: 600,
    width: '100%',
    display: 'flex',
    marginTop: 50,
    backgroundColor: '#e9eef5',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },

  moreBottom: {
    marginBottom: 30,
  },
  gridCont: {
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    filter: 'grayscale(100%)',
    width: 150,
    height: 100,
  },
}))

const AboutHero = () => {
  const classes = useStyles()
  return (
    <section className={classes.ourServices}>
      <Container className={classes.contHero}>
        <Typography variant='h2' gutterBottom align='center'>
          Our Brands
        </Typography>
        <Typography
          variant='body1'
          className={classes.moreBottom}
          gutterBottom
          align='center'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </Typography>
        <Grid container spacing={6} className={classes.gridCont}>
          <Grid item lg={3} className={classes.gridItem}>
            <Link href='#'>
              <img src={brandOne} alt='lewis' className={classes.img} />
            </Link>
          </Grid>
          <Grid item lg={3} className={classes.gridItem}>
            <Link href='#'>
              <img src={brandTwo} alt='adiddas' className={classes.img} />
            </Link>
          </Grid>
          <Grid item lg={3} className={classes.gridItem}>
            <Link href='#'>
              <img src={brandThree} alt='nike' className={classes.img} />
            </Link>
          </Grid>
          <Grid item lg={3} className={classes.gridItem}>
            <Link href='#'>
              <img src={brandFour} alt='h and m' className={classes.img} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default AboutHero
