import React from 'react'
import App from '../App'
import Home from '../components/Home'
import Present from '../components/PresentAbsent'
import ProjectChart from '../components/ProjectChart'
import { Router, Route, IndexRoute } from 'react-router'

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='projects' component={ProjectChart} />
      <Route path='present_absent' component={Present} />
    </Route>
  </Router>
)

export default Routes
