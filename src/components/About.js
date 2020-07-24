/* Author: Chethin Manage */
import React from 'react';
import '.././App.css';


/* What user sees when they click About
Contains hyperlinks to the github repo as well as the Firebase Privacy page
*/
function About() {
    return (
        <div className="emphasis-text">
            <h1> We are open source!</h1>
            <h6> Shelf-it is build on React and is hosted on Firebase</h6>
            <h6> You can view the source code <a href="https://github.com/cmanage1/shelf-it" target="__blank"> 
            here</a> </h6>
        </div>
    );
};

export default About;