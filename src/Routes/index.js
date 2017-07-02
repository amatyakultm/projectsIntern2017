import React from 'react';
import App from '../App';
import Home from '../pages/Home';
import Present from '../pages/PresentAbsent';
import ProjectChart from '../pages/ProjectChart';
import { Router, Route, IndexRoute } from 'react-router';

const Routes = props =>
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="projects" component={ProjectChart} />
      <Route path="present_absent" component={Present} />
    </Route>
  </Router>;

export default Routes;
