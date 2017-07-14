import React, { Component } from 'react';

import { defaults, Pie } from 'react-chartjs-2';
import ProjectDetail from '../../pages/projectDetail';
import MappingColor from '../ProjectOverview/MappingColor';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import '../../styles/Style.css';

defaults.global.legend.display = false;

class ProjectChart extends Component {
  constructor(props) {
    super(props);
  }
  changeURL(url) {
    url = _.replace(url, / /g, '_');
    browserHistory.push(url);
  }
  render() {
    const { project } = this.props;
    console.log('...', project);
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
        <div className="card-box">
          <h4 className="text-mute2 text-center margin-text">
            {parseInt(project.sum / 1000 / 60 / 60)} Hr(s)
          </h4>
          <Pie data={project.option} width={420} height={420} />
          <div className="row mt-3">
            <div className="text-mute">
              <h6>
                {project.projectname}
              </h6>
            </div>
          </div>
          <div className="btn-box-detail">
            <button
              className="btn btn-secondary btn-sm btn-details"
              onClick={() => this.changeURL(`/projects/${project.projectid}`)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectChart;
