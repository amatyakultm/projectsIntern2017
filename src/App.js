import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Style from './styles/Style.css';

const App = props => {
  return (
    <div className="App">
      <Navbar path={props.location.pathname} />
      <div className="container app-content">
        {props.children}
      </div>
    </div>
  );
};
export default App;
