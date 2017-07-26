import React, { Component } from 'react';
import { Doughnut, defaults, Pie } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import '../styles/Style.css';
import { Link } from 'react-router';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import moment from 'moment';
import ProjectDetail from './ProjectDetail';
import 'react-day-picker/lib/style.css';
import Mapping from './Mapping';
import Filter from './Filter';

const DAY_FORMAT = 'YYYY-MM-DD';
defaults.global.legend.display = false;

class ProjectChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      data: [],
      project: [],
      fromSelectedDay: undefined,
      toSelectedDay: undefined,
      projectSelected: undefined,
      option: undefined,
      sum_hours: 0
    };
  }

  getUsers() {
    axios
      .get(`http://52.77.234.30/api/sumprojectposition`)
      .then(response => {
        this.setState({
          projects: response.data.sumprojects,
          project: response.data.sumprojects,
          from: response.data.start,
          to: response.data.end
        });
        console.log(this.state.projects);
      })
      .catch(err => {
        this.setState({
          failed: true
        });
        //console.log(err)
      });
  }
  componentDidMount() {
    this.getUsers();
  }

  handleFromTo() {
    console.log(this.refs.from.value);
    console.log(this.refs.to.value);
    let from = this.refs.from.value;
    let to = this.refs.to.value;
    if (to < from) {
      from = to;
    }
    this.setState({
      projects: null,
      project: null
    });
    axios
      .get(`http://52.77.234.30/api/sumprojectposition?start=${from}&end=${to}`)
      .then(response => {
        this.setState({
          projects: response.data.sumprojects,
          project: response.data.sumprojects,
          from: response.data.start,
          to: response.data.end
        });
        console.log(this.state.projects);
      })
      .catch(err => {
        this.setState({
          failed: true
        });
        //console.log(err)
      });
  }

  handleDayChange(selectedDay, modifiers) {
    this.setState({
      selectedDay
    });
  }

  handleClickProject(projectId, option, sum_hours) {
    this.setState({
      projectSelected: projectId,
      option: option,
      sum_hours: sum_hours
    });
  }

  handleSearchProject(e) {
    const query = e.target.value.toLowerCase();
    let result = [];
    _.map(this.state.projects, item => {
      if (_.includes(item.projectname.toLowerCase(), query.toLowerCase())) {
        result.push(item);
      }
    });
    this.setState({
      project: result
    });
  }

  handleUpdateDate(event) {
    const { id, value } = event.target;
    if (!_.isEmpty(value)) {
      this.setState({ [id]: value });
    }
  }

  render() {
    const data = [
      {
        id: 'PMO',
        color: '#EE1F79'
      },
      {
        id: 'F.DEV',
        color: '#9E65AB'
      },
      {
        id: 'B.DEV',
        color: '#7360AC'
      },
      {
        id: 'QA',
        color: '#00A7BC'
      },
      {
        id: 'BA',
        color: '#04A54A'
      },
      {
        id: 'DSN',
        color: '#FFF200'
      },
      {
        id: 'M.DEV',
        color: '#FFB700'
      },
      {
        id: 'HR',
        color: '#F98B20'
      },
      {
        id: 'TECH',
        color: '#F46A1C'
      },
      {
        id: 'C.Found',
        color: '#C9302C'
      }
    ];
    const chartData = _.map(this.state.project, (item, index) => {
      var listDataOption = [];
      var listLabelOption = [];
      var colorList = [];

      var positionList = [
        'Project Management Officer',
        'Frontend Developer',
        'Backend Developer',
        'Quality Assurance Engineer',
        'Business Analyst',
        'Designer',
        'Mobile Developer',
        'HR Director',
        'Co-Founder'
      ];
      _.map(item[Object.keys(item)[0]], position => {
        listDataOption.push(position.total_hour);
        listLabelOption.push(position.position);
      });
      _.each(listLabelOption, label => {
        var color = '';
        if (label === positionList[0]) {
          color = '#EE1F79';
        } else if (label === positionList[1]) {
          color = '#9E65AB';
        } else if (label === positionList[2]) {
          color = '#7360AC';
        } else if (label === positionList[3]) {
          color = '#00A7BC';
        } else if (label === positionList[4]) {
          color = '#04A54A';
        } else if (label === positionList[5]) {
          color = '#FFF200';
        } else if (label === positionList[6]) {
          color = '#FFB700';
        } else if (label === positionList[7]) {
          color = '#F98B20';
        } else if (label === positionList[8]) {
          color = '#F46A1C';
        } else if (label === positionList[9]) {
          color = '#C9302C';
        }
        colorList.push(color);
      });
      var option = {
        datasets: [
          {
            data: listDataOption,
            backgroundColor: colorList
          }
        ],
        labels: listLabelOption,
        maintainAspectRatio: false,
        responsive: true
      };
      return (
        <div key={`div-${index}`} className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div
            className="card-box"
            onClick={e =>
              this.handleClickProject(Object.keys(item)[0], option, item.sum)}
          >
            <h6 className="text-mute text-center" key={`h6-${index}`}>
              {parseInt(item.sum / 1000 / 60 / 60)} Hrs
            </h6>
            <Pie
              key={`chart-${index}`}
              data={option}
              width={420}
              height={420}
            />
            <div className="col-md-12 text-center mt-3">
              {item.projectname}
            </div>
            {/*<button key={`btn-details-${index}`} onClick={() => this.handleClickDetail(Object.keys(item)[0])} className='btn btn-danger btn-sm btn-details'>Details</button>*/}
          </div>
        </div>
      );
    });

    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <img src="./assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };

    if (this.state.failed) {
      return <h3>Network Error.</h3>;
    }

    if (this.state.projectSelected) {
      return (
        <ProjectDetail
          project_id={this.state.projectSelected}
          option={this.state.option}
          start={this.state.from}
          end={this.state.to}
          sum_hours={this.state.sum_hours}
        />
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-12">
            {
              <div className="pull-right fromto-box">
                {!this.state.from ? '' : <span className="fromto">From </span>}
                {!this.state.from
                  ? ''
                  : <input
                      className="form-control fromto_input"
                      type="date"
                      ref="from"
                      id="from"
                      value={moment(this.state.from).format(DAY_FORMAT)}
                      onChange={e => this.handleUpdateDate(e)}
                    />}
                {!this.state.to ? '' : <span className="fromto">To </span>}
                {!this.state.to
                  ? ''
                  : <input
                      className="form-control fromto_input"
                      type="date"
                      ref="to"
                      id="to"
                      value={
                        !this.state.to
                          ? 'Waiting'
                          : moment(this.state.to).format(DAY_FORMAT)
                      }
                      onChange={e => this.handleUpdateDate(e)}
                    />}
                {!this.state.to && !this.state.from
                  ? ''
                  : <button
                      className="btn btn-sm btn-danger"
                      onClick={() => this.handleFromTo()}
                    >
                      Submit
                    </button>}
              </div>
            }
            <div className="pull-left">
              <Mapping data={data} />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          {
            <div className="col-md-6 offset-md-3">
              {!this.state.projects
                ? ''
                : <input
                    type="text"
                    className="form-control"
                    placeholder="Search Project"
                    onChange={e => this.handleSearchProject(e)}
                  />}
            </div>
          }
        </div>
        <div className="row mt-5">
          {!this.state.projects ? loadingData() : chartData}
        </div>
      </div>
    );
  }
}
export default ProjectChart;
