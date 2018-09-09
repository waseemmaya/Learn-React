import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Search from './Search/Search'
import registerServiceWorker from './registerServiceWorker';
import Layout from "./Layout/Layout"
ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
