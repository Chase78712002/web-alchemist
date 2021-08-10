import React from 'react'
import Layout from '../components/Layout'

export default function PageNotFound() {
    return (
        <Layout>
            <div>
                <h2>404</h2>
                <h3>PAGE NOT FOUND</h3>
                <p>Sorry, that page doesn't exist!!!</p>
                <p>Are you sure you entered the address correctly?</p>
            </div>
        </Layout>
    )
}
