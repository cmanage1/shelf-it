/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/

import React from 'react';
import '.././App.css';

import { withFirebase } from './Firebase';

const SignOutButton = ({ firebase }) => (
    <button 
        className="sign-out-btn"
        type="button" 
        onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);
