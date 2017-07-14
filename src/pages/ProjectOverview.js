import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Loading from '../components/Loading';
import ProjectChart from '../components/ProjectOverview/ProjectChart';
import DatePicker from '../components/datePicker';
import MappingColor from '../components/ProjectOverview/MappingColor';
import '../styles/Style.css';

const BASE_URL = 'http://52.77.234.30/api';

const positionList = {
  'Project Management Officer': { id: 'PMO', color: '#EE1F79' },
  'Frontend Developer': { id: 'F.DEV', color: '#9E65AB' },
  'Backend Developer': { id: 'B.DEV', color: '#7360AC' },
  'Quality Assurance Engineer': { id: 'QA', color: '#0052A6' },
  'Business Analyst': { id: 'BA', color: '#00A7BC' },
  Designer: { id: 'DSN', color: '#04A54A' },
  'Mobile Developer': { id: 'M.DEV', color: '#8FC630' },
  'HR Director': { id: 'HR', color: '#FFF200' },
  Technology: { id: 'TECH', color: '#FFB700' },
  'Application Support': { id: 'SUP', color: '#F98B20' },
  'Co-Founder': { id: 'CO', color: '#F46A1C' }
};

class ProjectOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      data: [],
      from: undefined,
      to: undefined
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

  async handleOnChange(data) {
    console.log('Data: ', data);
    await this.setState({
      projects: data.projects,
      from: data.from,
      to: data.to
    });
    console.log(this.state.projects);
  }
  handleIsLoad(data) {
    this.setState({
      projects: undefined
    });
  }
  generateChartData(projects) {
    return _.map(this.state.projects, (item, index) => {
      const _position = item[Object.keys(item)[0]];
      const listLabelOption = _.map(_position, ({ position }) => position);
      console.log('po', listLabelOption);

      const option = {
        datasets: [
          {
            data: _.map(_position, ({ total_hour }) => total_hour),
            backgroundColor: _.map(listLabelOption, label =>
              _.get(positionList, [label, 'color'])
            )
          }
        ],
        labels: listLabelOption,
        maintainAspectRatio: false,
        responsive: true
      };
      return {
        option,
        projectid: item.project_id,
        projectname: item.projectname,
        sum: item.sum
      };
    });
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`${BASE_URL}/sumprojectposition`);
      this.setState({
        projects: data.sumprojects,
        from: data.start,
        to: data.end
      });
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  render() {
    const projectDatas = this.generateChartData(this.state.projects);
    const data = _.map(positionList, item => item);
    if (this.state.failed) {
      return <h3>Network Error.</h3>;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <div className="btn-group pull-right">
              {!this.state.from
                ? ''
                : <DatePicker
                    from={this.state.from}
                    to={this.state.to}
                    onChange={data => this.handleOnChange(data)}
                    isLoad={() => this.handleIsLoad()}
                  />}
            </div>
            <div className="pull-left">
              <MappingColor data={data} />
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

// 'Project Management Officer': { id: 'PMO', color: '#EE1F79' },
//         'Frontend Developer': { id: 'F.DEV', color: '#9E65AB' },
//         'Backend Developer': { id: 'B.DEV', color: '#7360AC' },
//         'Quality Assurance Engineer': { id: 'QA', color: '#0052A6' },
//         'Business Analyst': { id: 'BA', color: '#00A7BC' },
//         Designer: { id: 'DSN', color: '#04A54A' },
//         'Mobile Developer': { id: 'M.DEV', color: '#8FC630' },
//         'HR Director': { id: 'HR', color: '#FFF200' },
//         Technology: { id: 'TECH', color: '#FFB700' },
//         'Application Support': { id: 'SUP', color: '#F98B20' },
//         'Co-Founder': { id: 'CO', color: '#F46A1C' }
