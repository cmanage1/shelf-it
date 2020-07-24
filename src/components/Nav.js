/*  Author: Chethin Manage  */
import React from 'react';
import '.././App.css';
import {Link } from 'react-router-dom';
import SignOutButton from './SignOut';

import { AuthUserContext } from './Session';

/*  The file handles the Navigation.
const nav is used to decide with component to mount.
Using ternary operations, the function decides whether to mount 
the Nav Bar for a Signed In user <NavAuth /> 
 or the Nav bar from a Signed Out user<NavNonAuth />.
*/
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
    /* Here the react-router-dom Link property is set to
    send user to specific route upon a click. 
    These routes are handled and declared in '../App.js' instead of a Router file.
    */
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
