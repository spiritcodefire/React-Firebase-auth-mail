import React from 'react'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import ButtonRadius from "../../Button/ButtonRadius"
import {Link} from "react-router-dom"


const SignupTel = () => {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
       
            <Form>
                <h1 className="text-center mb-5">Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="rounded-pill" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control className="rounded-pill" type="number" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="rounded-pill" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control className="rounded-pill" type="password" placeholder="Password" />
                </Form.Group>
                <br />
                    <Link to="/DashboardParticulier" >
                        <ButtonRadius
                            colorTextButton="text-light"
                            variant="success"
                            nameButton="Sign Up"
                            type="submit"
                        />
                    </Link>

            </Form>
            <p className="text-center mt-3">Vous avez déjà un compte ? Connectez vous ! </p>
        </div>
    )
}

export default SignupTel
