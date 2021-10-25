import React from 'react'
import { Box } from '@mui/system'
import {
  Button,
  Container,
  IconButton,
  makeStyles,
  TextField,
} from '@material-ui/core'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
const useStyles = makeStyles((theme) => ({
  iconButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  inputSm: {
    width: '75%',
  },
  srcBtn: {
    backgroundColor: '#59ab6e',
    height: 55,
    color: 'white',
  },
}))
const Menu = ({ setOpenSearchMenu }) => {
  const classes = useStyles()
  return (
    <Container>
      <Box className={classes.srch}>
        <IconButton
          className={classes.iconButton}
          onClick={() => setOpenSearchMenu(false)}
        >
          <CloseIcon className={classes.icon} fontSize='large' />
        </IconButton>
        <div className={classes.searchBox}>
          <TextField
            id='name'
            label='Search...'
            variant='outlined'
            className={classes.inputSm}
          />
          <Button variant='contained' className={classes.srcBtn}>
            <SearchIcon />
          </Button>
        </div>
      </Box>
    </Container>
  )
}

export default Menu
