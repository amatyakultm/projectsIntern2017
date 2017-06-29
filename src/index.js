import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes/Routes'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { browserHistory } from 'react-router';


ReactDOM.render(
  <Routes history={browserHistory}/>, 
  document.getElementById('root')
);


