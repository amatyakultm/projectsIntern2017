import React, { Component } from 'react';
import { defaults, Pie } from 'react-chartjs-2';
import ReactLoading from 'react-loading';
import Style from '../styles/details.css';
import { Link } from 'react-router';
import Navbar from './Navbar';
import axios from 'axios';
import _ from 'lodash';

class projectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      projects: []
    };
  }
  getProjectData() {
    axios
      .get(`http://52.77.234.30/projects/${this.props.params.projectid}/detail`)
      .then(response => {
        this.setState({
          projects: response.data.projectData
        });
      })
      .catch(err => {
        this.setState({
          failed: true
        });
        //console.log(err)
      });
  }
  componentDidMount() {
    this.getProjectData();
  }

  render() {
    const loadingData = () => {
      return <div>Loading</div>;
    };
    if (this.state.failed) {
      return <h3>Network Error.</h3>;
    }
    console.log(this.state.projects);
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 boxright">
            <Navbar />
            <div className="list3 font">
              {!this.state.projects
                ? loadingData()
                : _.map(this.state.projects, project =>
                    <tr>
                      <td>
                        {project.position}
                      </td>
                      <td>
                        {project.sum_man_day}
                      </td>
                    </tr>
                  )}
            </div>
          </div>
          <div className="col-8 boxleft">
            {/*<h1>Kirana amat</h1>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default projectDetail;
