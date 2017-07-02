import React from 'react';
import { Button, Navbar, Glyphicon } from 'react-bootstrap';
import './navBar.css';

const navBar = props => {
  const { handleOpenSidebar } = props;
  return (
    <div className="Bar">
      <Navbar>
        <Navbar.Header width="100%">
          <div>
            <Button onClick={handleOpenSidebar}>
              <Glyphicon glyph="menu-hamburger" />
            </Button>
          </div>
        </Navbar.Header>
      </Navbar>
    </div>
  );
};

export default navBar;
