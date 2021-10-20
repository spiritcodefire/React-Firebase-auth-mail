import React from 'react'
import ButtonRadius from '../../Button/ButtonRadius'
import {Link} from "react-router-dom"

const ConnectionEmailPhone = () => {
    return (
        <>
            <div className="bg-gris h50vh"></div>
            <div className="bg-gris h50vh" >
                <div className="bg-success borderTopRadius h50vh">
                    <h1 className="py-5 px-3 text-center text-light ">Connection</h1>   
                    <Link className="text-decoration-none" to="/BienenueLoginRegister">
                        <ButtonRadius
                            colorTextButton="text-success"
                            variant="light"
                            nameButton="avec votre Email"
                        />
                    </Link>
                    <br />
                    <ButtonRadius
                        colorTextButton="text-white"
                        variant="danger"
                        nameButton="avec Votre Telephone"
                    />
                    <p className="text-center mt-5 text-light">Don't have an Account ? </p>
                </div>    
            </div>
        </>
    )
}

export default ConnectionEmailPhone