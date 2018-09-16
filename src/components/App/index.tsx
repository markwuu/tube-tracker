import React from 'react'
import { Router, Route } from 'react-router'
import { LandingPage } from 'components/LandingPage'
import { createBrowserHistory } from 'history'
import { Provider } from 'unstated'

const history = createBrowserHistory()

export const App = () => (
  <Provider>
    <Router history={history}>
      <Route exact path="/" component={LandingPage} />
    </Router>
  </Provider>
)
