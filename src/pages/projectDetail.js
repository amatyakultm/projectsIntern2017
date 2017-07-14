import React, { Component } from 'react';
import { defaults, Pie } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import Style from '../styles/Style.css';
import TableData from '../components/ProjectOverview/TableData';

defaults.global.legend.display = false;
class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      sum_hours: 0,
      isOpen: false
    };
    console.log(props.params.projectid);
  }

  getProjectData() {
    axios
      .get(
        `http://52.77.234.30/projects/${this.props
          .project_id}/detail?start=${this.props.start}&end=${this.props.end}`
      )
      .then(response => {
        this.setState({
          projectdetail: response.data
        });
        console.log(this.state.projectdetail.projectData);
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
      return (
        <div className="col align-self-center loading">
          <img src="./assets/img/loading.svg" alt="" width="50" />
        </div>
      );
    };

    const createData = () => {
      return (
        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card-box">
              <h6 className="text-mute text-center">
                {parseInt(this.props.sum_hours / 1000 / 60 / 60)} Hrs
              </h6>
              <Pie data={this.props.option} width={420} height={420} />
              <div className="col-md-12 text-center mt-3">
                {/*<button key={`btn-details-${index}`} onClick={() => this.handleClickDetail(Object.keys(item)[0])} className='btn btn-danger btn-sm btn-details'>Details</button>*/}
                {/*<Link to={`/project/${Object.keys(item)[0]}`}>
                  <button key={`btn-details-${index}`} className='btn btn-danger btn-sm btn-details'>Details</button>
                </Link>*/}
                {this.state.projectdetail.project_name}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card_position_name pull-left">Position</div>
                    <div className="card_manday pull-right">Mandays</div>
                  </div>
                  <div className="card-block">
                    {_.map(this.state.projectdetail.projectData, item => {
                      let position = '';
                      return (
                        <div className="position-mandays">
                          <p className="pull-left">
                            {item.position}
                          </p>
                          <span className="pull-right">
                            {item.sum_man_day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TableData
            project_id={this.props.project_id}
            users={this.state.projectdetail.projectData}
          />
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
              {/*<button className='btn btn-danger'><i className='zmdi zmdi-settings'></i> Setting</button>*/}
            </div>
            <h4>
              <i className="zmdi zmdi-globe" /> Project Details{' '}
              {!this.state.projectdetail
                ? ''
                : `From ${this.state.projectdetail.from} To ${this.state
                    .projectdetail.to}`}
            </h4>
          </div>
        </div>
        {!this.state.projectdetail ? loadingData() : createData()}
      </div>
    );
  }
}
export default ProjectDetail;
