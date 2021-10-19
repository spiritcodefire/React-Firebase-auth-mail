import React from 'react'
import Layout from '../../Layout/Layout'

const Index = () => {
    return (
        <Layout header>
            <div className="container my-5">
                <h1>Super Admin ( Niv 1 )</h1>
                <p>Ce cluster pourra faire : </p>
                <p>Create Read Update et <strong>Delete</strong>  la base de donné : </p> 
                <ul>
                    <li>Tous les Users</li>
                    <li>Materiaux</li>
                    <li>Gestion Client</li>
                </ul>
            </div>
        </Layout>
    )
}

export default Index
