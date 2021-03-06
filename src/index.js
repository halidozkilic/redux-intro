import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.min.css'
import App from './components/root/App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";

import { Provider } from 'react-redux';
//use provider for redux!


import configureStore from "./redux/reducer/configureStore"

const store=configureStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> <App /></Provider> 
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
