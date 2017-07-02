import React, { Component } from 'react';
import App from '../App';
import Home from '../components/Home';
import ProjectChart from '../components/ProjectChart';
import projectDetail from '../components/projectDetail';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="projects" component={ProjectChart} />
          <Route path="projectdetail/:projectid" component={projectDetail} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
