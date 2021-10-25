import React from 'react'
import {
  AppBar,
  IconButton,
  Link,
  Toolbar,
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#222',
  },
  headConter: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  toolbar: {
    backgroundColor: '#222',
  },
  logo: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  socialIcons: {
    color: 'white',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  item2: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    color: '#fff',
  },
}))
const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <Container className={classes.headConter}>
        <AppBar position='static' elevation={0} className={classes.appbar}>
          <Toolbar className={classes.toolbar} variant='dense'>
            <Typography variant='h6' className={classes.logo}>
              Bnet
            </Typography>
            <div className={classes.item}>
              <IconButton>
                <MailIcon className={classes.icon} />
              </IconButton>
              <Typography>info@company.com</Typography>
            </div>
            <div className={classes.item2}>
              <IconButton>
                <PhoneIcon className={classes.icon} />
              </IconButton>
              <Typography>080-020-0340</Typography>
            </div>
            <div className='linkys'>
              <Link href='https://www.facebook.com/'>
                <IconButton className={classes.iconButtons}>
                  <FacebookIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
              <Link href='https://www.facebook.com/'>
                <IconButton className={classes.iconButtons}>
                  <TwitterIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
              <Link href='https://www.facebook.com/'>
                <IconButton className={classes.iconButtons}>
                  <InstagramIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
              <Link href='https://www.facebook.com/'>
                <IconButton className={classes.iconButtons}>
                  <LinkedInIcon className={classes.socialIcons} />
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  )
}

export default Header
