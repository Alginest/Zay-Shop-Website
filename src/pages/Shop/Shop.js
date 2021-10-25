import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CategoryBar from './CategoryBar/CategoryBar'
import ShopList from './ShopList/ShopList'
import OurServices from '../about/OurBrands/OurBrands'
const useStyles = makeStyles((theme) => ({
  shop: {
    marginTop: theme.spacing(4),
  },
  gridCont: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}))
const Shop = () => {
  const classes = useStyles()
  return (
    <section className={classes.shop}>
      <Container>
        <Grid container spacing={6} className={classes.gridCont}>
          <Grid item md={2}>
            <CategoryBar />
          </Grid>
          <Grid item xs={12} md={10}>
            <ShopList />
          </Grid>
        </Grid>
      </Container>
      <OurServices />
    </section>
  )
}

export default Shop
