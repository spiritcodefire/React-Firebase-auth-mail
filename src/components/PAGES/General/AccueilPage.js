import React from 'react'
import { Link } from 'react-router-dom';

const AccueilPage = () => {
    return (
        <Link className="text-decoration-none text-dark" to="/StartUpEnergetique">
            <div  className=" bg-success bg-gradient m-0 p-0" style={{height: '100vh', width: "100wh", display: "flex ", alignItems: "center"}} >
              
                <div className="col  bg-light" style={{flex: 1, height: 200}}>
                    <h1 className="text-center mt-5">Renovation Solidaire</h1>
                    <h1 className="text-center text-danger">Hammel</h1>
                    <p className="text-center">Logo</p>
                </div>
                
            </div>
        </Link>
    )
}

export default AccueilPage
