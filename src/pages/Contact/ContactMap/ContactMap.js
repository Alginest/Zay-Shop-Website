import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  contactMap: {
    height: 540,
    backgroundColor: '#E9EEF5',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  title: {
    paddingTop: theme.spacing(4),
  },
  googleMap: {
    marginTop: theme.spacing(7),
    width: '100%',
    height: 350,
  },
}))

const CategoryBar = () => {
  const classes = useStyles()
  const uniqueTitle = 'Fun'
  return (
    <section className={classes.contactMap}>
      <Typography
        variant='h3'
        align='center'
        gutterBottom
        className={classes.title}
      >
        Contact Us
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet.
      </Typography>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50222.11438559395!2d-122.24653342398236!3d38.119676074471755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808574a0c8e918f1%3A0x87ebe1e282f7297c!2sThe%20Sardine%20Can!5e0!3m2!1sen!2sba!4v1634477768397!5m2!1sen!2sba'
        className={classes.googleMap}
        title={uniqueTitle}
      ></iframe>
    </section>
  )
}

export default CategoryBar
