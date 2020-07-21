import React from 'react';
import { withAuthorization } from './Session';
import '.././App.css';

function Shelf() {
    return (
       <div>
           <h1> Shelf Page</h1>
       </div> 
    );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Shelf);