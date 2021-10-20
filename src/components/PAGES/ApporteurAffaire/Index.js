import React from 'react'
import Layout from '../../Layouts/LayoutSchema'
const Index = () => {
    return (
        <Layout header>
           <div className="container my-5">
                <h1>Apporteur d'affaire Régie ( niv 6) </h1>
                <p>Ce cluster pourra faire : </p>
                <p>Creer des clients particuliers et se les attribuer</p>
                <p>Voir les clients qu'il a créer et son CA</p>
                <p>Voir le base de données traitement client et voir l'état du client</p>
            </div>
        </Layout>
    )
}

export default Index
