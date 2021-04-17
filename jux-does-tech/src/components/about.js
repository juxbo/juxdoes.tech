/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "./common/icon"
import Contact from "./contact"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Background from "./background"

const About = ({ startOffset }) => {
  let parallax

  return (
    <>
      <ParallaxLayer
        className="background-tile-gr background-tile-left"
        offset={1}
        speed={0.3}
        factor={0.8}
      />
      <Background startOffset={1} />
      <ParallaxLayer offset={1.1} speed={0.2}>
        <div className="card section">
          <h2>About me</h2>
          <p>Tescht 123</p>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default About
