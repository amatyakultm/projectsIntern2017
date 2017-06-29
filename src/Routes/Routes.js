import React, {Component} from 'react'
import App from '../App'
import Home from '../components/Home'
import ProjectChart from '../components/ProjectChart'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

class Routes extends Component {
  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='projects' component={ProjectChart} />
        </Route>
      </Router>
    )
  }
}

export default Routes

// const Routes = (props) => (
//   <Router {...props}>
//     <Route path='/' component = {ProjectChart}>
//       {/*<Route path='projects' component={projectsDetail} />*/}
//     </Route>
//   </Router>
// );

// export default Routes
