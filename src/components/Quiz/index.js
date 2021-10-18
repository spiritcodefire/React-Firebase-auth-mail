import React from 'react'

const index = (props) => {
    return (
        <div>
            <h2>Pseudo :  {props.userData.pseudo}   </h2>
            <h2>Email de l'user :  {props.userData.email} </h2>
        </div>
    )
}

export default index

