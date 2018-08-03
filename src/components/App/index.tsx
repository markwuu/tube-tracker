import React from 'react'
import { Router, Route } from 'react-router'
import { LandingPage } from 'components/LandingPage'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const App = () => (
  <Router history={history}>
    <Route exact path="/" component={LandingPage} />
  </Router>
)
