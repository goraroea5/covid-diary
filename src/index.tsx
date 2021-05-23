import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DateMomentUtils from '@date-io/moment';
import {  MuiPickersUtilsProvider  } from "@material-ui/pickers";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateMomentUtils}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
