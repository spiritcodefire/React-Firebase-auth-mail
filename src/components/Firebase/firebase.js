import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCJTMVgFOdlgE_XC50H-y-3HEKf3jLMRQU",
    authDomain: "exemple-dk.firebaseapp.com",
    databaseURL: "https://exemple-dk-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "exemple-dk",
    storageBucket: "exemple-dk.appspot.com",
    messagingSenderId: "54743263186",
    appId: "1:54743263186:web:68b593ac7b8742bd8eca0b",
    measurementId: "G-YYPJ8Y9LBN"
};



class Firebase {
    constructor() {
        app.initializeApp(config);
        // permet de récuperer l'authentification
        this.auth = app.auth();
        this.db = app.firestore()
    }

    // inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

    // Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email); 

    // firestore
    user = uid => this.db.doc(`users/${uid}`);

}

export default Firebase;