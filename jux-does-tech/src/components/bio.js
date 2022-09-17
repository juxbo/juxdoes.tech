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
import { useTrail, a } from "@react-spring/web"
import VisibilitySensor from "react-visibility-sensor"
import AnimatedText from "./common/animatedText"

const Bio = ({}) => {
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

  const [visible, setVisible] = React.useState(false)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio card">
      {author?.name && (
        <div style={{ margin: "0 2em" }}>
          <p className="bio-text">Hi there! My name is...</p>
          <h2 style={{ margin: 0 }}>
            <strong>{author.name}</strong>, aka <q>{author.shortname}</q>
          </h2>
          <h5 style={{ margin: 0, marginBottom: ".5em", fontWeight: "normal" }}>
            Software Engineer and Tech Enthusiast
          </h5>
          {/* <p>
            I'm a computer science student from germany that loves basically
            everything you can consider tech, whether it's computers, phones,
            wearables, cameras or even cars. Feel free to contact me on my
            socials linked below.
          </p> */}
          <h2
            style={{
              fontSize: "2em",
              fontWeight: 1000,
              marginTop: ".5em",
              fontStyle: "italic",
            }}
          >
            <VisibilitySensor
              onChange={isVis => {
                // Only set to true the first time its visible
                if (isVis) setVisible(true)
              }}
            >
              <AnimatedText open={visible} text={author?.subtitle} />
            </VisibilitySensor>
          </h2>
        </div>
      )}
      <Contact />
    </div>
  )
}

export default Bio
