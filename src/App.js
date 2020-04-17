import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './assets/css/style-register.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';	 
import Register from './components/Register';
import Login from './components/Login';
import registerImg from './assets/images/logo-tower-register.png';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        <footer class="wrap-logo-bottom">
          <img src={registerImg} class="block" />
        </footer>
      </div>
    </Router>
  );
}

export default App;
