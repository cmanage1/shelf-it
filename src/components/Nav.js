/*  Author: Chethin Manage  */
import React from 'react';
import '.././App.css';
import {Link } from 'react-router-dom';
import SignOutButton from './SignOut';

import { AuthUserContext } from './Session';

const Nav = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavAuth /> : <NavNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
);

//What displays when the user has SIGNED IN
const NavAuth = () => (
    //Here I'm setting the react-router-dom Link property
    //to send user to specific route upon a click
    <nav >
        <ul className="nav-links">
            <Link className="nav-links" to="/">
                <li> Home </li>
            </Link>
            
            <Link className="nav-links" to="/search">
                <li> Search </li>
            </Link>

            <Link className="nav-links" to="/shelf">
                <li>My Shelf </li>
            </Link>
            
            <Link className="nav-links" to="/account">
                <li>Account </li>
            </Link>

            <Link className="nav-links" to="/about">
                <li> About </li>
            </Link>
            
            <li>
                <SignOutButton />
            </li>
        </ul>
    </nav>
);

//What displays when the user has NOT SIGNED IN YET
const NavNonAuth = () => (
    <nav >
        <ul className="nav-links">
            <Link className="nav-links" to="/">
                <li> Home </li>
            </Link>

            <Link className="nav-links" to="/search">
                <li> Search </li>
            </Link>


            <Link className="nav-links" to="/shelf">
                <li>My Shelf </li>
            </Link>

            <Link className="nav-links" to="/about">
                <li> About </li>
            </Link>

            <Link className="nav-links" to="/signin">
                <li> Sign In </li>
            </Link>
        </ul>
    </nav>
);

export default Nav;
