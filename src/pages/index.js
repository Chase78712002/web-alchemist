import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'


export default function Home({data}) {
  console.log('data', data);
  const { title, description, copyright } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>Web developer based in Vancouver</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} />
      </section>

      <p>{ title }----{description}</p>

      <p>{copyright}</p>
    </Layout>

  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        copyright
        description
        title
      }
    }
  }
`