import React from 'react'
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#222',
    height: 600,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: '#8a8a8a',
    borderRadius: '30px',
    marginBottom: '30px',
  },
  logo: {
    color: '#068201',
    fontSize: '35px',
    fontWeight: '500',
    marginBottom: theme.spacing(2),
  },
  textSmall: {
    color: '#fff',
    fontWeight: 200,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  titleSmall: {
    marginBottom: theme.spacing(3),
    fontSize: '35px',
    fontWeight: 200,
    color: 'white',
  },
  gridCont: {
    marginBottom: '50px ',
  },
  socialItems: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  socialIcons: {
    color: 'white',
  },
  iconButtons: {
    border: '1px solid gray',
    margin: 5,
  },
  mailTo: {
    display: 'flex',
  },
  field: {
    color: 'white!important',
  },
  btnMail: {
    height: 55,
    backgroundColor: '#068201',
    color: 'white',
    transitionDuration: '0.5s',
    transitionProperty: 'background',
    transitionTimingFunction: 'ease-in',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  linkys: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={6} className={classes.gridCont}>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Typography className={classes.logo}>Zay Shop</Typography>
            <div className={classes.underline}></div>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              <LocationOnIcon className={classes.icon} /> Consectetur at ligula
              10660
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              <PhoneIcon className={classes.icon} />
              010-020-0340
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              <MailIcon className={classes.icon} /> info@company.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Typography variant='h4' className={classes.titleSmall}>
              Products
            </Typography>
            <div className={classes.underline}></div>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Luxury
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Sport Wear
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Men's Shoes
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Woman's Shoes
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Popular Dress
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Gym Accessories
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Sport Shoes
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Typography variant='h4' className={classes.titleSmall}>
              Further Info
            </Typography>
            <div className={classes.underline}></div>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              About Us
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Shop Locations
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              FAQs
            </Typography>
            <Typography gutterBottom className={classes.textSmall} variant='h6'>
              Contact
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.underline}></div>
        <div className={classes.socialItems}>
          <div className={classes.linkys}>
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
          <div className='mailTo'>
            <TextField
              label='E-mail'
              variant='outlined'
              color='secondary'
              InputLabelProps={{
                className: classes.field,
              }}
            />
            <Button variant='contained' className={classes.btnMail}>
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
