import React from 'react'
import Layout from '../../Layout/Layout'

const Index = () => {
    return (
        <Layout header>
             <div className="container my-5">
            <h1>Gestion Fournisseur ( niv 4 ) </h1>
            <p>Ce cluster pourra faire : </p>
            <p>Create Read Update et Désactivé la base de donné : </p> 
            <ul>
                <li>Fournisseurs</li>
                <li>Materiaux</li>
            </ul>
            <p>Leur but est de pouvoir rajouter des fournisseurs</p>
           <p>ILs pourront rajouter des fournisseurs, mais aussi modifié les matériaux dans le but d'aider les fournisseurs</p>
           
        </div>
        </Layout>
    )
}

export default Index
