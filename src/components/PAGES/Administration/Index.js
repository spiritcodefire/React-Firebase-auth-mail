import React from 'react'
import Layout from '../../Layout/Layout'

const Index = () => {
    return (
        <Layout header>
        <div className="container my-5">
            <h1>Administration de L'application ( niv 3 ) </h1>
            <p>Ce cluster pourra faire : </p>
            <p>Create Read Update et Désactivé la base de donné : </p> 
            <ul>
                <li>Tous les Users à partir du niv 4, 5, 6, 7 , 8 , 9</li>
                <li>Gestion Client</li>
            </ul>
            <p>IL y'aura un catégorie Rappel des client qui seront à recontacter</p>
            <p>Ils pouront changer les statut des clients dans la BD Gestion client, il y'aura par exemple : </p>
            <ul>
                <li>papier client</li>
                <li>Devis</li>
                <li>Facture</li>
                <li>Vision de l'offre choisis par le client (array d'offre selectionné)</li>
            </ul>
        </div>
        </Layout>
    )
}

export default Index
