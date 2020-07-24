import React from 'react';
import {PasswordChangeLink} from './ChangePassword';
import { AuthUserContext, withAuthorization } from './Session';

/*This coponent greets the user
There was initially a feature to greet by username hence the arrow function.
This feature was removed because of security warning, I did not have time 
to figure out a solution to this problem
*/
const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1 className="emphasis-text">Hello Person
                    </h1>
                <PasswordChangeLink />
            </div>
        )}
    </AuthUserContext.Consumer>
);

//This condition is appied to the given class in order to prevent an UNAUTHENTICATED user to access this page
//See  more about "withAuthorization" in 'Session/withAuthorization.js"
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);