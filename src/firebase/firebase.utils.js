import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiUzg_CeqNoCLx81ozfTUHHlbO46py2aw",
    authDomain: "crwn-db-1303.firebaseapp.com",
    projectId: "crwn-db-1303",
    storageBucket: "crwn-db-1303.appspot.com",
    messagingSenderId: "119589355827",
    appId: "1:119589355827:web:242f715c3b426f1b2ffe46",
    measurementId: "G-C5HXDF2G5Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;