import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/pageHome'
import About from './pages/pageAbout'
import Contact from './pages/pageContact'

function Routes ():JSX.Element{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/wesleypraca" exact component={Home} />
        <Route path="/wesleypraca/about" component={About} />
        <Route path="/wesleypraca/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
