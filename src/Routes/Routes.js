import React, { Component } from "react";
import App from "../App";
import Home from "../components/Home";
import ProjectChart from "../components/ProjectChart";
import ProjectDetail from "../components/ProjectDetail";
import PresentAbsent from "../components/PresentAbsent";
import PresentAbsentGrant from "../components/PresentAbsent_Grant";
import Employee from "../components/Employee";
import SettingPosition from "../components/Setting/SettingPosition";
import SettingData from "../components/Setting/SettingData";
import { Router, Route, IndexRoute } from "react-router";

const Routes = props =>
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={ProjectChart} />
      <Route path="projects" component={ProjectChart} />
      <Route path="project/:projectid" component={ProjectDetail} />
      <Route path="presentabsent" component={PresentAbsent} />
      <Route path="presentabsent/grant" component={PresentAbsentGrant} />
      <Route path="employee" component={Employee} />
      <Route path="setting/position" component={SettingPosition} />
      <Route path="setting/data" component={SettingData} />
    </Route>
  </Router>;

export default Routes;
