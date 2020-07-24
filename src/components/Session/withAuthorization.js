/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

/* Features from this page are used constantly within the application
It uses firebase authentication API to keep track of users.
The methods are defined in this file instead of the respective js file is because
of organization. More code in '/Session' , less code in original components
*/
const withAuthorization = condition => Component => {

    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    //send to sign in page when trying to access unauthorized page
                    if (!condition(authUser)) {
                        this.props.history.push("/signin");
                    }
                },
            );
        }

        //Handle authentication state changes
        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    
    return compose(
        withRouter,
        withFirebase,
    )(WithAuthorization);
};

export default withAuthorization;