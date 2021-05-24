import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DateMomentUtils from '@date-io/moment';
import {  MuiPickersUtilsProvider  } from "@material-ui/pickers";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#ffc107',
    },
    secondary: {
      main: '#f44336',
    },
    text: {
      primary: '#FFF'
    }
  },
});

ReactDOM.render(
  <MuiThemeProvider theme = { theme }>
    <MuiPickersUtilsProvider utils={DateMomentUtils}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
