import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Shelf from './components/Shelf';
import About from './components/About';
import SignIn from './components/SignIn';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <Router>

      <div className="App">
        <Nav />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shelf" component={Shelf} />
          <Route path="/signin" component={SignIn} /> 
        </Switch>
          
      </div>
    </Router>
  );
}

export default App;
