/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/
import React from 'react';
import '.././App.css';
import { withFirebase } from './Firebase';

/* This is a button that I have  decided to declare in a seperate class for organization
Uses firebase auth api to doSignOut.
This method is defined in 'Firebase/firebase.js'
*/
const SignOutButton = ({ firebase }) => (
    <button 
        className="sign-out-btn"
        type="button" 
        onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

//This condition is appied to the given class in order to prevent an UNAUTHENTICATED user to access this page
//See  more about "withAuthorization" in 'Session/withAuthorization.js"
export default withFirebase(SignOutButton);