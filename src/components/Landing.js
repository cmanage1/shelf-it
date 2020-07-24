/*  Author: Chethin Manage  */
import React from 'react';
import '.././App.css';

/* What user sees when they click on the main url ( default route "/").
Contains hyperlinks to the issues page on github as well as the Firebase Privacy page
*/
function Landing() {
    return (
        <div className="emphasis-text">
            <h1> Shelf-it allows you to store books in your possession on our virtual shelf </h1>

            <h6> Please click Sign In to use the application</h6>
            <h6> Google's Firebase authetication API is used to log users, you can read about their Privacy & Policy
                <a href="https://firebase.google.com/support/privacy" target="__blank"> here </a></h6>
            <h4> Give us feedback on <a href="https://github.com/cmanage1/shelf-it/issues" target="__blank">Github</a></h4>
            
             <br></br>
        </div>
    );
};

/*This page does not need "witAuthorization" unlike all the other files
because the landing page is accessed by anyone */
export default Landing;