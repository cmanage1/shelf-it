import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

//Used so pages can call the directory and get exports from various files within the directory
export default Firebase;
export { FirebaseContext, withFirebase };