import React from 'react';
import App from '../App';
import Home from '../pages/Home';
import ViewMode from '../components/PresentAbsent/ViewMode';
import Table from '../components/PresentAbsent/Table';
import Calendar from '../components/PresentAbsent/Calendar';
import ProjectChart from '../pages/ProjectOverview';
import ProjectDetail from '../pages/projectDetail';
import { Router, Route, IndexRoute } from 'react-router';

const Routes = props =>
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="projects" component={ProjectChart} />
      <Route path="projects/:projectid" component={ProjectDetail} />
      <Route path="present_absent" component={ViewMode}>
        <IndexRoute component={Table} />
        <Route path="table" component={Table} />
        <Route path="calendar" component={Calendar} />
      </Route>
    </Route>
  </Router>;

export default Routes;
