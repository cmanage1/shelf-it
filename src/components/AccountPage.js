import React from 'react';
import {PasswordChangeLink} from './ChangePassword';
import { AuthUserContext, withAuthorization } from './Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {authUser.username}</h1>
                <PasswordChangeLink />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);