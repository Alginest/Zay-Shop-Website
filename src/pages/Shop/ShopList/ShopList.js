import React from 'react'
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import { Box } from '@mui/system'
import { shopData } from '../../../data/ShopData'
import Rating from '@mui/material/Rating'

const useStyles = makeStyles((theme) => ({
  shopBtn: {
    width: 100,
    fontSize: 18,
    fontWeight: 400,
    '&:hover ': {
      color: 'green',
    },
  },
  pickBox: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  formSize: {
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: 320,
    },
  },
  productShop: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  img: {
    height: 450,
  },
  ratingDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  bottomButton: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  pigBtn: {
    padding: '15px 25px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#59ab6e',
    },
  },
}))

const ShopList = () => {
  const classes = useStyles()
  const [category, setCategory] = React.useState('')

  return (
    <section>
      <Box className={classes.pickBox}>
        <ButtonGroup variant='text' aria-label='text button group'>
          <Button className={classes.shopBtn}>All</Button>
          <Button className={classes.shopBtn}>Men's</Button>
          <Button className={classes.shopBtn}>Woman's</Button>
        </ButtonGroup>
        <form>
          <FormControl className={classes.formSize}>
            <InputLabel id='demo-simple-select-label'>Items</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={'Featured'}>Featured</MenuItem>
              <MenuItem value={'AtoZ'}>A-Z</MenuItem>
              <MenuItem value={'Item'}>Item</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Box>
      <div className={classes.productShop}>
        <Grid container spacing={4}>
          {shopData.map((item, index) => {
            const { title, sizes, price, img } = item
            console.log(img)
            return (
              <Grid item lg={4} key={index}>
                <Card>
                  <CardMedia
                    component='img'
                    image={img}
                    alt={title}
                    className={classes.img}
                  />
                  <CardContent>
                    <Typography varaint='h6' gutterBottom>
                      {title}
                    </Typography>
                    <Typography varaint='h6' gutterBottom>
                      {sizes}
                    </Typography>
                    <div className={classes.ratingDiv}>
                      <Rating value={3} max={5} className={classes.rating} />
                    </div>
                    <Typography varaint='h6' gutterBottom align='center'>
                      {price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
      <div className={classes.bottomButton}>
        <ButtonGroup variant='contained' aria-label='text button group'>
          <Button className={classes.pigBtn}>1</Button>
          <Button className={classes.pigBtn}>2</Button>
          <Button className={classes.pigBtn}>3</Button>
        </ButtonGroup>
      </div>
    </section>
  )
}

export default ShopList
