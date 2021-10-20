import React from 'react'
import Layout from '../../Layouts/LayoutSchema'

const Index = () => {
    return (
        <Layout header>
            <div className="container my-5">
            <h1>Super Admin (Niv 2) </h1>
            <p>Ce cluster pourra faire : </p>
            <p>Create Read Update et Désactivé la base de donné : </p> 
            <ul>
                <li>Tous les Users à partir du niveau 3,4,5,6,7,8,9</li>
                <li>Materiaux</li>
                <li>Gestion Client</li>
            </ul>
        </div>
    </Layout>
    )
}

export default Index
