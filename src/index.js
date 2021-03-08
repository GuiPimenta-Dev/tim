import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Screens/signin';
import Home from './components/Screens/home';
import Search from './components/Screens/search';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {AuthProvider} from './provider/auth'


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Switch>
        <AuthProvider>
          <Route exact path="/" component={App}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/search" component={Search}/>
          </AuthProvider>
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
