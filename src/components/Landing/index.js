import React from 'react'
// import Layout from '../Layout/Layout'
// import Button from 'react-bootstrap/Button'
// import Stack from 'react-bootstrap/Stack'
 import { Link } from 'react-router-dom';

const Landing = () => {

    return (
        <>
        {/* <Layout> */}
        <Link className="text-decoration-none text-dark" to="/test">
            <div  className=" bg-success bg-gradient m-0 p-0" style={{height: '100vh', width: "100wh", display: "flex ", alignItems: "center"}} >
              
                <div className="col  bg-light" style={{flex: 1, height: 200}}>
                    <h1 className="text-center mt-5">Renovation Solidaire</h1>
                    <h1 className="text-center text-danger">Hammel</h1>
                    <p className="text-center">Logo</p>
                </div>
                
            </div>
        </Link>
        {/* </Layout> */}
        </>
    )
}

export default Landing
