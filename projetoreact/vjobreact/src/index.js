import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';
import {BrowserRouter} from 'react-router-dom'

const backendUrl = 'localhost'
const backEndPort = 4000
Axios.defaults.baseURL = `http://${backendUrl}:${backEndPort}`

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
