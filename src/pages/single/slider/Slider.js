import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Box } from '@mui/system'
import { imgData } from '../../../data/ImgData'
import Carousel from 'react-elastic-carousel'

const useStyles = makeStyles((theme) => ({
  aboutHero: {
    marginTop: 50,
  },
  img: {
    width: 564,
    height: 524,
    marginLeft: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 500,
      marginLeft: theme.spacing(0),
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 300,
      marginLeft: theme.spacing(0),
    },
  },
  slider: {
    marginTop: theme.spacing(8),
  },
  smImg: {
    width: 130,
    height: 130,
  },
  carousel: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  btnSlide: {
    color: 'black',
  },
  item: {
    height: '130px',
    maxWidth: '130px',
    backgroundColor: '#fff',
    margin: '0 15px',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  },
}))
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const Slider = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const { id, img } = imgData[value]

  return (
    <Box className={classes.aboutHero}>
      <img src={img} alt='workout' key={id} className={classes.img} />
      <div className={classes.slider}>
        <Carousel breakPoints={breakPoints}>
          {imgData.map((item) => {
            const { id, img } = item
            return (
              <div
                className={classes.item}
                key={id}
                onClick={() => setValue(id - 1)}
              >
                <img src={img} alt='workout' className={classes.smImg} />
              </div>
            )
          })}
        </Carousel>
      </div>
    </Box>
  )
}

export default Slider
