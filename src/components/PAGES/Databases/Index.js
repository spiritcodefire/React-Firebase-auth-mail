import React from 'react'
import Layout from '../../Layouts/LayoutSchema'

const Index = () => {
    return (
        <Layout header>
            <div className="container">
                <h1>Les Databases </h1>
                <p>Trois Database Seront utiles</p>
                <ul>
                    <li>Users</li>
                    <li>Offres Disponible pour le client</li>
                    <li>Materiaux Disponible</li>
                    <li>Traitement Etat Client</li>
                </ul>
            </div>
            

        </Layout>
    )
}

export default Index
