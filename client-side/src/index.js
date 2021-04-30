import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './components/Registration';
import Profile from './components/Profile';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout'
import 'font-awesome/css/font-awesome.min.css'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <BaseLayout>
          <Switch>
                <Route exact path ='/' component= {App} />
                <Route exact path ='/Register' component= {Register} />
                <Route exact path = '/Profile' component= {Profile} />
          </Switch>
        </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
