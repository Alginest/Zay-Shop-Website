import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Box } from '@mui/system'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const useStyles = makeStyles((theme) => ({
  position: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  acoBtn: {
    fontWeight: 400,
  },
}))

const CategoryBar = () => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        Categories
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.position}>
          <Button className={classes.acoBtn}>Man</Button>
          <Button className={classes.acoBtn}>Woman</Button>
          <Button className={classes.acoBtn}>Other</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
        >
          <Typography>Sale</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.position}>
          <Button className={classes.acoBtn}>Sport</Button>
          <Button className={classes.acoBtn}>Luxury</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Product</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.position}>
          <Button className={classes.acoBtn}>Bag</Button>
          <Button className={classes.acoBtn}>Sweather</Button>
          <Button className={classes.acoBtn}>Sunglass</Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default CategoryBar
