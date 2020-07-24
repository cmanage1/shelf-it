/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/
import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

/* Features from this page are used constantly within the application
It uses firebase authentication API to keep track of users.
The methods are defined in this file instead of the respective js file is because 
of organization. More code in '/Session' , less code in original components
*/
const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser: null,
            };
        }

        //Handle authentication state changes
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser
                        ? this.setState({ authUser })
                        : this.setState({ authUser: null });
                },
            );
        }
        
        //Listen for authentication state changes
        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};


export default withAuthentication;