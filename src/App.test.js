import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Home from './components/Home';
import Shelf from './components/Shelf';
import About from './components/About';
import SignIn from './components/SignIn';

it("Renders All Pages without crashing", () =>{
  var div = document.createElement("div");
  ReactDOM.render(<App />, div)
  console.log('Renders App & Navigation Controls');
  ReactDOM.unmountComponentAtNode(div);

  div = document.createElement("div");
  ReactDOM.render(<Home />, div)
  console.log('Renders Home');
  ReactDOM.unmountComponentAtNode(div);

  div = document.createElement("div");
  ReactDOM.render(<Shelf />, div)
  console.log('Renders Shelf');
  ReactDOM.unmountComponentAtNode(div);

  div = document.createElement("div");
  ReactDOM.render(<About />, div)
  console.log('Renders About');
  ReactDOM.unmountComponentAtNode(div);

  div = document.createElement("div");
  ReactDOM.render(<SignIn />, div)
  console.log('Renders SignIn');
  ReactDOM.unmountComponentAtNode(div);

} )
