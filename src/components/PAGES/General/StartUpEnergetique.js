import React from 'react'
import Button from "../../Button/ButtonRadius"
import {Link} from "react-router-dom"

const StartUpEnergetique = () => {
    return (
        <>
            <div className="bg-gris h50vh "></div>
            <div className="bg-gris h50vh" >
                <div className="bg-success borderTopRadius h50vh">
                        <h1 className="pt-5 px-3 text-center text-light">La start-up energetique vous accompagne</h1>
                        <p className= "py-4 px-3 text-light text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ut.</p>
                        <Link className="text-decoration-none" to="/ConnectionEmailPhone">
                        <Button 
                            colorTextButton="text-success"
                            variant="light"
                            nameButton="Commencer"
                        />
                        </Link>
                </div>  
                
            </div>
        </>
    )
}

export default StartUpEnergetique
