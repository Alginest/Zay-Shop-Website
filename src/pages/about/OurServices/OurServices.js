import React from 'react'
import {
  Container,
  makeStyles,
  Typography,
  Grid,
  IconButton,
  Card,
  CardContent,
} from '@material-ui/core'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import PersonIcon from '@mui/icons-material/Person'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
const useStyles = makeStyles((theme) => ({
  ourServices: {
    height: 600,
    width: '100%',
    display: 'flex',
    margin: '50px 0',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  card: {
    height: 256,
    width: 306,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    color: '#59ab6e',
  },
  moreBottom: {
    marginBottom: 30,
  },
  gridCont: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}))

const AboutHero = () => {
  const classes = useStyles()
  return (
    <section className={classes.ourServices}>
      <Container className={classes.contHero}>
        <Typography variant='h2' gutterBottom align='center'>
          Our Services
        </Typography>
        <Typography
          variant='body1'
          className={classes.moreBottom}
          gutterBottom
          align='center'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.
        </Typography>
        <Grid container spacing={6} className={classes.gridCont}>
          <Grid item lg={3}>
            <Card elevation={4} className={classes.card}>
              <IconButton>
                <LocalShippingIcon
                  className={classes.icon}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </IconButton>
              <CardContent>
                <Typography variant='h6' align='center'>
                  Delivery Services
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card elevation={4} className={classes.card}>
              <IconButton>
                <ImportExportIcon
                  className={classes.icon}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </IconButton>
              <CardContent>
                <Typography variant='h6' align='center'>
                  Delivery Services
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card elevation={4} className={classes.card}>
              <IconButton>
                <MonetizationOnIcon
                  className={classes.icon}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </IconButton>
              <CardContent>
                <Typography variant='h6' align='center'>
                  Delivery Services
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={3}>
            <Card elevation={4} className={classes.card}>
              <IconButton>
                <PersonIcon
                  className={classes.icon}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </IconButton>
              <CardContent>
                <Typography variant='h6' align='center'>
                  Delivery Services
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default AboutHero
