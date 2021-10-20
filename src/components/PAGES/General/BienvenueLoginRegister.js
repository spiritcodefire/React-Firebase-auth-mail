import React from 'react'
import ButtonRadius from "../../Button/ButtonRadius"
import {Link} from "react-router-dom"

const BienvenueLogin = () => {
    return (
        <>
            <div className="bg-gris h50vh"></div>
            <div className="bg-gris h50vh" >
                <div className="bg-white borderTopRadius h50vh">
                    <h1 className="pt-5 pb-2 px-3 text-center text-dark  fw-bold">Bienvenue chez RS</h1>
                    <p className="text-muted p-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste.</p>
                    <ButtonRadius
                        colorTextButton="text-light"
                        variant="success"
                        nameButton="Login"
                    />
                    <br />
                    <Link to="/SignupTelParticulier" className="text-decoration-none">
                    <ButtonRadius
                        colorTextButton="text-dark"
                        variant="warning"
                        nameButton="Register"
                    />
                    </Link>
                </div>    
            </div>
        </>
    )
}

export default BienvenueLogin