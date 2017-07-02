import React, { Component } from 'react';
import { defaults, Pie } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import Style from '../styles/Style.css';
import { Link, browserHistory } from 'react-router';

defaults.global.legend.display = false;
class ProjectChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      data: []
    };
  }
  getUsers() {
    axios
      .get('http://52.77.234.30/api/sumprojectposition')
      .then(response => {
        this.setState({
          projects: response.data.sumprojects
        });
        //console.log(this.state.projects);
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

  handleClickDetail(URL, projectId) {
    browserHistory.push(URL)
  }

  render() {
    const chartData = _.map(this.state.projects, (item, index) => {
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
        'Technology'
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
          color = '#00A7BC';
        } else if (label === positionList[3]) {
          color = '#FFB700';
        } else if (label === positionList[4]) {
          color = '#FFF200';
        } else if (label === positionList[5]) {
          color = '#7360AC';
        } else if (label === positionList[6]) {
          color = '#04A54A';
        } else if (label === positionList[7]) {
          color = '#F46A1C';
        } else if (label === positionList[8]) {
          color = '#8FC630';
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
          <div className="card-box">
            <h4
              className="text-mute2 text-center margin-text"
              key={`sum-${index}`}
            >
              {parseInt(item.sum / 1000 / 60 / 60)} Hrs
            </h4>
            <Pie
              key={`chart-${index}`}
              data={option}
              width={420}
              height={420}
            />
            <div className="row mt-3">
              <div className="text-mute" key={`projectname-${index}`}>
                <h6>
                  {item.projectname}
                </h6>
              </div>
            </div>
            <div className="btn-box-detail">
              <Link to={`/projectdetail/${Object.keys(item)[0]}`}>
                <button
                  key={`btn-details-${index}`}
                  className="btn btn-secondary btn-sm btn-details"
                >
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    });

    const loadingData = () => {
      return (
        <div className="col align-self-center loading">
          <ReactLoading
            type="spin"
            color="#dc3833"
            className="loading-icon"
            delay={0}
          />
          Loading
        </div>
      );
    };
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
            <h4 style={{ marginTop: '5px' }}>
              <i className="zmdi zmdi-globe" /> Projects
            </h4>
          </div>
        </div>
        <div className="row mt-5">
          {!this.state.projects ? loadingData() : chartData}
        </div>
      </div>
    );
  }
}
export default ProjectChart;
