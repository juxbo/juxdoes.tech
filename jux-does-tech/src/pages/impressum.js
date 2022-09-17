import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="blog-post">
        <section>
          <h1>Impressum</h1>
          <p>This will be the impressum.</p>
        </section>
      </div>
    </Layout>
  )
}

export default Impressum

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
