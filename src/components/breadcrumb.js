import React from 'react';
import _ from 'lodash';
import { Breadcrumb } from 'react-bootstrap';
import './breadcrumb.css';

const mappingPath = {
  projects: {
    icon: 'zmdi zmdi-globe',
    title: 'Project Overview'
  },
  present_absent: {
    icon: 'zmdi zmdi-globe',
    title: 'Present/ Absent'
  }
};

const breadcrumb = props => {
  console.log('breadprop = ', props);
  const location = _.get(props, 'location').replace('/', '');
  const icon = _.get(mappingPath, [location, 'icon']);
  const title = _.get(mappingPath, [location, 'title']);
  return (
    <div>
      <Breadcrumb>
        <h3 className="title">
          <i className={icon} /> {title}
        </h3>
      </Breadcrumb>
    </div>
  );
};

export default breadcrumb;
