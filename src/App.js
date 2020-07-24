/* Author: Chethin Manage */
import React from 'react';
import './App.css';

//page imports
import Nav from './components/Nav';
import Search from './components/Search';
import Landing from './components/Landing';
import Shelf from './components/Shelf';
import About from './components/About';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import AccountPage from './components/AccountPage';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';

//imports for dealing with routes
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//imports for dealing with auth
import { withAuthentication } from './components/Session';

const App = () => (
        //ROUTES are defined here
        //Navigation bar is also defined here
        <Router>
          <div className="App">
            <Nav /> 
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/search" component={Search} />
              <Route path="/about" component={About} />
              <Route path="/shelf" component={Shelf} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signout" component={SignOut} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot_password" component={ForgotPassword} />
              <Route path="/account" component={AccountPage} />
              <Route path="/change_password" component={ChangePassword} />
            </Switch>
          </div>
        </Router>
);


//This condition is appied  to see what the user's ID is
//See  more about "withAuthentication" in 'Session/withAuthentication.js"
export default withAuthentication(App);