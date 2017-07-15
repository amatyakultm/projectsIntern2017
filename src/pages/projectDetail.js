import React, { Component } from 'react';
import { defaults, Pie } from 'react-chartjs-2';
import axios from 'axios';
import _ from 'lodash';
import ReactLoading from 'react-loading';
import Loading from '../components/Loading';
import Style from '../styles/Style.css';
import TableData from '../components/ProjectOverview/TableData';

defaults.global.legend.display = false;
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
class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      failed: false,
      sum_hours: 0,
      isOpen: false
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `http://52.77.234.30/api/sumprojectposition/${this.props.params
          .projectid}`
      );
      this.setState({
        projectdetail: data.sumprojects,
        from: data.start,
        to: data.end
      });
      this.getProjectData();
      _.map(this.state.projectdetail, (item, index) => {
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
        console.log(option);
        this.setState({ option: option });
      });
      // console.log(this.state.projectdetail[0]);
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  getProjectData() {
    axios
      .get(
        `http://52.77.234.30/projects/${this.props.params
          .projectid}/detail?start=${this.state.from}&end=${this.state.to}`
      )
      .then(response => {
        this.setState({
          projectData: response.data
        });
        console.log(this.state.projectData);
      })
      .catch(err => {
        this.setState({
          failed: true
        });
      });
  }

  render() {
    const createData = () => {
      return (
        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card-box">
              <h6 className="text-mute text-center">
                {parseInt(this.state.projectdetail[0].sum / 1000 / 60 / 60)} Hrs
              </h6>
              <Pie data={this.state.option} width={420} height={420} />
              <div className="col-md-12 text-center mt-3">
                {/*<button key={`btn-details-${index}`} onClick={() => this.handleClickDetail(Object.keys(item)[0])} className='btn btn-danger btn-sm btn-details'>Details</button>*/}
                {/*<Link to={`/project/${Object.keys(item)[0]}`}>
                  <button key={`btn-details-${index}`} className='btn btn-danger btn-sm btn-details'>Details</button>
                </Link>*/}
                {this.state.projectdetail[0].projectname}
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
                : `From ${this.state.from} To ${this.state.to}`}
            </h4>
          </div>
        </div>
        {!this.state.projectdetail ? <Loading /> : createData()}
      </div>
    );
  }
}
export default ProjectDetail;
