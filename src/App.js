import { CssBaseline } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import About from './pages/about/About'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact.js'
import Search from './components/Search/Search'
import Single from './pages/single/Single'
const App = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearchMenu, setOpenSearchMenu] = useState(false)

  if (openSearchMenu) {
    return (
      <>
        <Search setOpenSearchMenu={setOpenSearchMenu} />
      </>
    )
  }
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Navbar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          setOpenSearchMenu={setOpenSearchMenu}
        />
        <Menu openMenu={openMenu} />
        <Switch>
          <Route exact path='/'>
            <Home />
            <Footer />
          </Route>
          <Route exact path='/about'>
            <About />
            <Footer />
          </Route>
          <Route exact path='/shop'>
            <Shop />
            <Footer />
          </Route>
          <Route exact path='/contact'>
            <Contact />
            <Footer />
          </Route>
          <Route exact path='/single'>
            <Single />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
