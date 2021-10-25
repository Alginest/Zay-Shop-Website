import React from 'react'
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  Container,
} from '@material-ui/core'
import categoryOne from '../../../img/category_img_01.jpg'
import categoryTwo from '../../../img/category_img_02.jpg'
import categoryThree from '../../../img/category_img_03.jpg'

const useStyles = makeStyles((theme) => ({
  containere: {
    marginTop: '100px',
  },
  textCenter: {
    textAlign: 'center',
  },
  smallText: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 100,
    fontSize: 20,
  },
  img: {
    height: 356,
    width: 356,
    borderRadius: 300,
    border: '1px solid #d2d4d2',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  item: {
    textAlign: 'center',
  },
}))
const Categorys = () => {
  const classes = useStyles()
  return (
    <Container className={classes.containere}>
      <Typography variant='h2' className={classes.textCenter}>
        Categories of The Month
      </Typography>
      <Typography variant='body1' className={classes.smallText} gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        libero nisi natus impedit animi modi.
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
          <img src={categoryOne} alt='alfredo watch' className={classes.img} />
          <Typography variant='h5' gutterBottom>
            Watches
          </Typography>
          <Button variant='contained' color='primary'>
            Go Shop
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
          <img src={categoryTwo} alt='alfredo watch' className={classes.img} />
          <Typography variant='h5' gutterBottom>
            Watches
          </Typography>
          <Button variant='contained' color='primary'>
            Go Shop
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
          <img
            src={categoryThree}
            alt='alfredo watch'
            className={classes.img}
          />
          <Typography variant='h5' gutterBottom>
            Watches
          </Typography>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Go Shop
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Categorys
