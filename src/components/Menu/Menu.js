import React from 'react'
import { Box } from '@mui/system'
import {
  makeStyles,
  Divider,
  List,
  ListItem,
  ListItemText,
  InputBase,
  Badge,
} from '@material-ui/core'
import { ListItemButton, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchAv: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  search: {
    margin: '20px 0',
  },
  stack: {
    margin: '20px 0',
  },
  input: {
    border: '1px solid lightgray',
  },
  link: {
    textDecoration: 'none',
    color: '#222',
  },
}))
const Menu = ({ openMenu }) => {
  const classes = useStyles()
  return (
    <>
      {openMenu && (
        <Box sx={{ width: '100%', bgcolor: 'white' }} className={classes.box}>
          <nav aria-label='main mailbox folders'>
            <List>
              <ListItem>
                <ListItemButton>
                  <Link to='/' className={classes.link}>
                    <ListItemText primary='Home' />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Link to='/about' className={classes.link}>
                    <ListItemText primary='About' />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Link to='/shop' className={classes.link}>
                    <ListItemText primary='Shop' />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <Link to='/contact' className={classes.link}>
                    <ListItemText primary='Contact' />
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <div className={classes.searchAv}>
            <div className={classes.search}>
              <InputBase placeholder='Search ...' className={classes.input} />
              <SearchIcon className={classes.thickSearch} />
            </div>
            <div className={classes.stack}>
              <Stack spacing={4} direction='row'>
                <Badge color='primary' badgeContent={5}>
                  <AddShoppingCartIcon className={classes.icon} />
                </Badge>
                <Badge color='primary' badgeContent={11} max={99}>
                  <PersonIcon className={classes.icon} />
                </Badge>
              </Stack>
            </div>
          </div>
        </Box>
      )}
    </>
  )
}

export default Menu
