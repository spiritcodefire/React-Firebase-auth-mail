import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

const NavbarGeneral = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
        <Container fluid>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                <Nav.Link className="mx-3" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/superAdmin">Super-Admin</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/administration">Administration</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/gestionFournisseur">Gestion Fournisseur</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/fournisseurMateriaux">Fournisseur de materiaux</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/apporteurAffaire">Apporteur d'affaire</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/auditeur">Auditeur</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/artisans">Artisans</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/particuliers">Particuliers</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/databases">Les DataBases</Nav.Link>
                
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default NavbarGeneral
