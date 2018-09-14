import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Search from './Search/Search'
import registerServiceWorker from './registerServiceWorker';
import GitIssue from "./GitIssue/GitIssue"
ReactDOM.render(<GitIssue />, document.getElementById('root'));
registerServiceWorker();
