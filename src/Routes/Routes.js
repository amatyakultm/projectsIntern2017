import React, {Component} from 'react'
import App from '../App'
import Home from '../components/Home'
import ProjectChart from '../components/ProjectChart'
import ProjectDetail from '../components/ProjectDetail'
import { Router, Route, IndexRoute } from 'react-router'

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='projects' component={ProjectChart} />
      <Route path='project/:projectid' component={ProjectDetail} />
    </Route>
  </Router>
)

export default Routes
