import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import aboutHeros from '../../../img/about-hero.svg'
const useStyles = makeStyles((theme) => ({
  aboutHero: {
    backgroundColor: '#59ab6e',
    width: '100%',
    height: 700,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  text: {
    color: '#fff',
  },
  contHero: {
    height: 700,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: '900px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 300,
  },
  shoeShop: {
    width: 416,
    height: 416,
    [theme.breakpoints.up('xs')]: {
      width: 280,
      height: 316,
    },
    [theme.breakpoints.up('sm')]: {
      width: 416,
      height: 416,
    },
  },
}))

const AboutHero = () => {
  const classes = useStyles()
  return (
    <Box className={classes.aboutHero}>
      <Container className={classes.contHero}>
        <div className={classes.text}>
          <Typography variant='h3' gutterBottom>
            About Us
          </Typography>
          <Typography className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </div>
        <img src={aboutHeros} alt='aboutHero' className={classes.shoeShop} />
      </Container>
    </Box>
  )
}

export default AboutHero
