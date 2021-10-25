import React from 'react'
import {
  makeStyles,
  MobileStepper,
  Box,
  Button,
  Typography,
  Paper,
} from '@material-ui/core'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { useTheme } from '@emotion/react'
import imageOne from '../../../img/banner_img_01.jpg'
import imageTwo from '../../../img/banner_img_02.jpg'
import imageThree from '../../../img/banner_img_03.jpg'
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  imgCont: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  img: {
    height: 700,
    [theme.breakpoints.up('xs')]: {
      height: 350,
    },
    [theme.breakpoints.up('sm')]: {
      height: 500,
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.up('lg')]: {
      height: 700,
    },
  },
}))
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    label: 'Nike Air Max  – New York Store, United States',
    imgPath: imageOne,
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: imageTwo,
  },
  {
    label: 'Lamp Season - Buy it today for a new price !',
    imgPath: imageThree,
  },
]

const Hero = () => {
  const theme = useTheme()
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }
  return (
    <Box className={classes.container}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} className={classes.imgCont}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component='img'
                sx={{
                  maxWidth: 588,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
                className={classes.img}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  )
}

export default Hero
