import React from 'react';
import '.././App.css';
import {Link } from 'react-router-dom';

function Nav() {
    //Here I'm setting the react-router-dom Link property
    //to send user to specific route upon a click
    return (
        <nav >
            <ul className="nav-links">
                
                <Link className="nav-links" to="/">
                    <li> Home </li>
                </Link>

                <Link className="nav-links" to="/signin">
                    <li>Sign In </li>
                </Link>
                
                <Link className="nav-links" to= "/shelf">
                    <li>My Shelf </li>
                </Link>

                <Link className="nav-links" to= "/about">
                    <li> About </li>
                </Link>

                
                
                
                
            </ul>
        </nav>
    );
};

export default Nav;
