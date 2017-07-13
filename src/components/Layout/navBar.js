import React from 'react';
import { Button, Navbar, Glyphicon } from 'react-bootstrap';
import _ from 'lodash';
import './navBar.css';

const mappingPath = {
  projects: {
    icon: 'zmdi zmdi-globe',
    title: 'PROJECT OVERVIEW'
  },
  present_absent: {
    icon: 'zmdi zmdi-globe',
    title: 'PRESENT/ ABSENT'
  },
  'present_absent/table': {
    icon: 'zmdi zmdi-globe',
    title: 'PRESENT/ ABSENT'
  },
  'present_absent/calendar': {
    icon: 'zmdi zmdi-globe',
    title: 'PRESENT/ ABSENT'
  }
};

const navBar = props => {
  const { handleOpenSidebar } = props;
  console.log('navprop = ', props);
  const location = _.get(props, 'location').replace('/', '');
  const icon = _.get(mappingPath, [location, 'icon']);
  const title = _.get(mappingPath, [location, 'title']);
  console.log('location = ', location);
  return (
    <div className="Bar">
      <Navbar>
        <Navbar.Header width="100%">
          <div>
            <Button className="ham" onClick={handleOpenSidebar}>
              <Glyphicon glyph="menu-hamburger" />
            </Button>
            <h3 className="title">
              <i className={icon} /> {title}
            </h3>
          </div>
        </Navbar.Header>
      </Navbar>
    </div>
  );
};

export default navBar;
