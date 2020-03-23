import React from 'react'
import { IndexRoute, Route, Link, IndexRedirect, Redirect } from 'react-router'

/* containers */
import HomepageImage from './components/HomepageImage';
import Login from './components/Login';


const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRedirect to='/' />
    <Route path='/register' component={HomepageImage} />
    <Route path='/login' component={Login} />
  </Route>
)