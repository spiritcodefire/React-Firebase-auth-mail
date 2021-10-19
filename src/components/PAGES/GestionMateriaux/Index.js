import React from 'react'
import Layout from '../../Layout/Layout'

const Index = () => {
    return (
        <Layout header>
        <div className="container my-5">
       <h1>Gestion Materiaux ( niv 5 ) </h1>
       <p>Ce cluster pourra faire : </p>
       <p>Create Read Update et Désactivé la base de donné : </p> 
       <ul>
           <li>Materiaux</li>
       </ul>
       <p>Leur but est de pouvoir Gerer les materiaux</p>
      <p>ILs pourront Ajouter leur materiaux, les modifier, les supprimer, les afficher</p>
      
   </div>
   </Layout>
    )
}

export default Index
