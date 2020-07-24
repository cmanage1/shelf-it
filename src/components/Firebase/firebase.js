/*
Author: Chethin Manage
Credit to: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
*/

import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APPID ,
    measurementId: process.env.REACT_APP_MEASUREMENT
};


/* Features from this page are used constantly within the application
It uses firebase authentication and firestire APIs to keep track of users.
The methods are defined in this file instead of the respective js file is because
of organization. More code in '/Firebase' , less code in original components
*/
class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    /* Using Firebase Authentication API */

    //This function calls firebase auth api
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    //This function calls firebase auth api
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    //This function calls firebase auth api
    doSignOut = () => this.auth.signOut();

    //This function calls firebase auth api
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    //This function calls firebase auth api
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;