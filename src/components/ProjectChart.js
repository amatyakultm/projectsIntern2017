import React from 'react';
import _ from 'lodash';

import { defaults, Pie } from 'react-chartjs-2';

import '../styles/Style.css';

defaults.global.legend.display = false;

const ProjectChart = props => {
  const { project } = props;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
      <div className="card-box">
        <h4 className="text-mute2 text-center margin-text">
          {parseInt(project.sum / 1000 / 60 / 60)} Hrs
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
          <button className="btn btn-secondary btn-sm btn-details">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectChart;
