import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import Carousel from 'react-elastic-carousel'
import { relatedData } from '../../../data/RelatedData'
import Rating from '@mui/material/Rating'
const useStyles = makeStyles((theme) => ({
  related: {
    backgroundColor: '#fff',
    width: '100%',
    height: 800,
  },
  item: {
    height: '550px',
    width: '410px',
    backgroundColor: '#fff',
    margin: '0 15px',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    [theme.breakpoints.down('xs')]: {
      height: '520px',
    },
  },
  image: {
    width: '100%',
    height: 430,
    [theme.breakpoints.down('xs')]: {
      height: '390px',
    },
  },
  rating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    marginLeft: theme.spacing(2),
    color: 'black',
  },
}))
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const Related = () => {
  const classes = useStyles()
  return (
    <section className={classes.related}>
      <Container>
        <Typography
          variant='h5'
          style={{ fontWeight: 800, paddingTop: 50, marginBottom: 50 }}
          gutterBottom
        >
          Related Products
        </Typography>
        <div className={classes.carousel}>
          <Carousel breakPoints={breakPoints}>
            {relatedData.map((item, i) => {
              const { id, name, rating, price, img, sizes } = item
              return (
                <div className={classes.item} key={id}>
                  <img src={img} alt={name} className={classes.image} />
                  <Typography gutterBottom className={classes.text}>
                    {name}
                  </Typography>
                  <Typography className={classes.text}>{sizes}</Typography>
                  <div className={classes.rating}>
                    <Rating value={rating} max={5} />
                    <Typography>{price}</Typography>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </Container>
    </section>
  )
}

export default Related
