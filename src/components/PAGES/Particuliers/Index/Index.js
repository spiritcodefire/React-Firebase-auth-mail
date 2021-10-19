import React from 'react'
import Layout from '../../../Layout/Layout'

const Index = () => {
    return (
        <Layout header className="h1 text-dark">
            <div className="container">
                <h1>Clients Particuliers   niv9</h1>
                <p>Update ses propres infos</p>
                <p>Read : ses devis, factures, cadastre</p>
                <p>Peut ajouter des documents sur la plateforme</p>
                <p>Trouve un auditeur à proximité</p>
                <p>Provoquer une demande de Rappel ( si il a un auditeur alors c'est l'auditeur, si pas de réponse avant 24H, envoi du client à l'administration</p>
                <p>peut choisir les matériaux dans un market</p>
            </div>
        </Layout>
    )
}

export default Index