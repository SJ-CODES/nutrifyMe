import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './components/Registration';
import Profile from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './BaseLayout';
import 'font-awesome/css/font-awesome.min.css';
import { createStore } from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 



ReactDOM.render(
  
<React.StrictMode>
  <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
            <Switch>
                  <Route exact path='/' component= {App}/>
                  <Route exact path ='/Login' component= {Login} />
                  <Route exact path ='/Register' component= {Register} />
                  <Route exact path = '/Profile' component= {Profile} />
                  <Route exact path = '/Home' component= {Home} />    
            </Switch>
        </BaseLayout>
        
      </BrowserRouter>
    </Provider>
</React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
