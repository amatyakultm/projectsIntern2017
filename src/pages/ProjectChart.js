import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Breadcrumb from '../component/breadcrumb';
import Loading from '../component/Loading';
import ProjectChart from '../component/ProjectChart';
import '../styles/Style.css';

const BASE_URL = 'http://52.77.234.30/api';

class ProjectOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      data: []
    };
  }

  // getUsers() {
  //   axios
  //     .get('http://52.77.234.30/api/sumprojectposition')
  //     .then(response => {
  //       this.setState({
  //         projects: response.data.sumprojects
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         failed: true
  //       });
  //     });
  // }

  handleClickDetail(projectId) {
    console.log(projectId);
  }

  generateChartData(projects) {
    return _.map(this.state.projects, (item, index) => {
      const positionList = {
        'Project Management Officer': '#EF5350',
        'Frontend Developer': '#b482b4',
        'Backend Developer': '#d9d974',
        'Quality Assurance Engineer': '#ff6684',
        'Business Analyst': '#4A90E2',
        Designer: '#ff6a0d',
        'Mobile Developer': '#66cdaa',
        'HR Director': '#AD1457',
        Technology: '#bd5b85',
        'Application Support': '#FFC300'
      };
      const _position = item[Object.keys(item)[0]];
      const listLabelOption = _.map(_position, ({ position }) => position);

      const option = {
        datasets: [
          {
            data: _.map(_position, ({ total_hour }) => total_hour),
            backgroundColor: _.map(listLabelOption, label =>
              _.get(positionList, label)
            )
          }
        ],
        labels: listLabelOption,
        maintainAspectRatio: false,
        responsive: true
      };
      return {
        option,
        projectname: item.projectname,
        sum: item.sum
      };
    });
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`${BASE_URL}/sumprojectposition`);
      this.setState({ projects: data.sumprojects });
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  render() {
    const projectDatas = this.generateChartData(this.state.projects);

    if (this.state.failed) {
      return <h3>Network Error.</h3>;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="btn-group pull-right">
              <button className="btn btn-danger">
                <i className="zmdi zmdi-settings" />Month
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {!this.state.projects
            ? <Loading />
            : _.map(projectDatas, (project, index) =>
                <ProjectChart key={index} project={project} />
              )}
        </div>
      </div>
    );
  }
}
export default ProjectOverview;
