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
        className="background-tile-gr background-tile-right"
        offset={startOffset}
        speed={0.3}
        factor={0.8}
      />
      {/* <Background startOffset={1} /> */}
      <ParallaxLayer
        offset={startOffset + 0.1}
        speed={0.2}
        // sticky={{ start: startOffset, end: 4 }}
      >
        <div className="card section">
          <h2>About me</h2>
          <p>
            I'm a computer science student from germany that loves basically
            everything you can consider tech, whether it's computers, phones,
            wearables, cameras or cars. I'm currently employed as a working
            student for Commerzbank AG, where I've worked on a few different
            projects as a full-stack developer.
          </p>
          <h3>My experience</h3>
          <p>
            I started out as a Java Backend Developer, but am currently working
            the full-stack. (TODO: Put some skills here)
          </p>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default About
