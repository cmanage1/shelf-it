import React from 'react';
import {PasswordChangeLink} from './ChangePassword';
import { AuthUserContext, withAuthorization } from './Session';

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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);