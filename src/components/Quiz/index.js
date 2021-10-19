import React, {useState, useEffect} from 'react';


const Index = (props) => {
       // console.log(props);
    const [state, setstate] = useState("")
    
    useEffect(() => {
      if (props.userSession.emailVerified === true ) {
        setstate("true")
         }else{
            setstate("false")
         }
        
        }
    , [props.userSession.emailVerified])

 



    return (
        <div>
            <h2>Pseudo :  {props.userData.pseudo}   </h2>
            <h2>Email de l'user :  {props.userData.email} </h2>
            <h2>Uid :  {props.userSession.uid} </h2>
            <h2>Email Verified :   {state} </h2>
        </div>
    )
}

export default Index

