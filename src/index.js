import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Contacts from './App/Contacts/Contacts'
import { Route, HashRouter, Switch } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <HashRouter>
        <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/contacts" component={Contacts}/>
        </Switch>
    </HashRouter>,
  document.getElementById('root')
);
