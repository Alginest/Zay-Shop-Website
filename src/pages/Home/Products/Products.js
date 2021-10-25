import React from 'react'
import {
  makeStyles,
  Typography,
  Grid,
  Container,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'
import Rating from '@mui/material/Rating'
import imageOne from '../../../img/feature_prod_01.jpg'
import imageTwo from '../../../img/feature_prod_02.jpg'
import imageThree from '../../../img/feature_prod_03.jpg'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  productsSec: {
    backgroundColor: '#d5e8f7',
    height: 800,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
    paddingBottom: 50,
  },
  containere: {
    marginTop: '100px',
    backgroundColor: '#d5e8f7',
  },
  textCenter: {
    textAlign: 'center',
    marginTop: '20px',
  },

  smallText: {
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 100,
    fontSize: 20,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  item: {
    textAlign: 'center',
  },
  ratingPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'gray',
    marginBottom: ' 20px ',
  },
  itemInfo: {
    color: '#222',
    fontSize: '16px',
  },
}))
const Categorys = () => {
  const classes = useStyles()
  return (
    <div className={classes.productsSec}>
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
            <Card>
              <CardMedia
                component='img'
                className={classes.img}
                image={imageOne}
                alt='green iguana'
              />
              <CardContent>
                <div className={classes.ratingPrice}>
                  <Rating value={4} max={5} />
                  <Typography>480.00$</Typography>
                </div>
                <Typography variant='body2' className={classes.itemInfo}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam labore, tempora facilis molestiae iusto eveniet
                  adipisci.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Reviews (9)</Button>
                <Link to='/single'>
                  <Button size='small'>Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Card>
              <CardMedia
                component='img'
                className={classes.img}
                image={imageTwo}
                alt='green iguana'
              />
              <CardContent>
                <div className={classes.ratingPrice}>
                  <Rating value={5} max={5} />
                  <Typography>480.00$</Typography>
                </div>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.itemInfo}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                  quos temporibus magnam. Voluptatibus, corporis deserunt.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Reviews (27)</Button>
                <Link to='/single'>
                  <Button size='small'>Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Card>
              <CardMedia
                component='img'
                className={classes.img}
                image={imageThree}
                alt='green iguana'
              />
              <CardContent>
                <div className={classes.ratingPrice}>
                  <Rating value={3} max={5} />
                  <Typography>480.00$</Typography>
                </div>
                <Typography
                  variant='body2'
                  color='secondary'
                  className={classes.itemInfo}
                >
                  Aenean gravida dignissim finibus. Nullam ipsum diam, posuere
                  vitae pharetra sed, commodo ullamcorper.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Reviews (16)</Button>
                <Link to='/single'>
                  <Button size='small'>Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Categorys
