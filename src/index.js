import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './pages/app/App';
import Details from './pages/details/Details';
import { HashRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <Switch>
        <Route path="/home">
          <App />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
