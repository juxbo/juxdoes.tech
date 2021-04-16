/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Icon } from "./common/icon"
import Contact from "./contact"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            shortname
            subtitle
          }
          contact {
            name
            link
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio card">
      {author?.name && (
        <div style={{ margin: "0 2em" }}>
          <h2 style={{ margin: 0 }}>
            Hi! I'm <strong>{author.name}</strong>
          </h2>
          <h3 style={{ margin: 0, fontWeight: "normal" }}>
            - or {author.shortname} for short.
          </h3>
          <h2 style={{ fontWeight: "normal" }}>{author?.subtitle || null}</h2>
        </div>
      )}
      <Contact />
    </div>
  )
}

export default Bio
