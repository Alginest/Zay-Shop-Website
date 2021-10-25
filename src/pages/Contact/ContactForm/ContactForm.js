import React from 'react'
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formSec: {
    width: '100%',
    height: 800,
    [theme.breakpoints.down('sm')]: {
      height: '1000px',
    },
  },
  formCont: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: 1100,
    height: 600,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: 'auto',
    },
  },
  next: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  inputSm: {
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(5),
    },
  },
  subject: {
    width: '100%',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  message: {
    marginBottom: theme.spacing(5),
  },
  talkBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  talkBtndef: {
    backgroundColor: '#59ab6e',
    color: 'white',
    padding: '15px 30px',
  },
}))
const handleSubmit = (e) => {
  e.preventDefault()
}
const CategoryBar = () => {
  const classes = useStyles()
  return (
    <section className={classes.formSec}>
      <Container className={classes.formCont}>
        <form className={classes.form} onClick={handleSubmit}>
          <Typography
            variant='h2'
            align='center'
            gutterBottom
            style={{ fontWeight: 300 }}
          >
            Contact Detail
          </Typography>
          <div className={classes.next}>
            <TextField
              id='name'
              label='Name'
              variant='outlined'
              className={classes.inputSm}
            />
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              className={classes.inputSm}
            />
          </div>
          <TextField
            id='Subject'
            label='Subject'
            variant='outlined'
            className={classes.subject}
          />
          <TextField
            id='Message'
            label='Message'
            variant='outlined'
            minRows={10}
            maxRows={12}
            multiline
            fullWidth
            className={classes.message}
          />

          <div className={classes.talkBtn}>
            <Button
              variant='contained'
              size='medium'
              className={classes.talkBtndef}
            >
              Let's Talk
            </Button>
          </div>
        </form>
      </Container>
    </section>
  )
}

export default CategoryBar
