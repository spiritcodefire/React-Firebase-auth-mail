import React, {useState, useContext} from 'react';
import { FirebaseContext } from '../Firebase/';


const Index = (props) => {
    const firebase = useContext(FirebaseContext);

    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');
    const [pseudo , setPseudo] = useState('');

    const signup = ()=>{
      
        firebase.auth.createUserWithEmailAndPassword(email , password)
        .then((userCredential)=>{
            // send verification mail.
          userCredential.user.sendEmailVerification();
          firebase.auth.signOut();
          alert("l'email de confirmation a été envoyé, merci d'aller regarder votre boite mail");
          props.history.push('/login');
        })
        .then( authUser => {
            //ci dessous permet d'envoyer le pseudo
            return firebase.user(authUser.user.uid).set({
                email, 
                pseudo
            })
        })
        .catch(alert);
    }
      
    
    return (
      <div className="container">
        <br/><br/>
        <input type="email" placeholder="Email" 
        onChange={(e)=>{setemail(e.target.value)}}>
        </input>
        <br/><br/>
        <input type="password" placeholder="password" 
        onChange={(e)=>{setpassword(e.target.value)}}>
        </input>
        <br/><br/>
        <input type="text" placeholder="pseudo" 
        onChange={(e)=>{setPseudo(e.target.value)}}>
        </input>
        <br/><br/>
        <button onClick={signup}>Sign-up</button>
      </div>
    );
}

export default Index
