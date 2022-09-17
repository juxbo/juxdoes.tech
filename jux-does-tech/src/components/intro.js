/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "./common/icon"
import Bio from "./bio"
import Contact from "./contact"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ScrollIndicator from "./common/scrollIndicator"
import AnimatedText from "./common/animatedText"

const Intro = ({ startOffset, handler }) => {
  return (
    <>
      <ParallaxLayer offset={startOffset} speed={1}>
        <div className="section intro">
          <h2>Hi there! I'm...</h2>
          <h1>
            <strong>Justin Böhm</strong>
          </h1>
          <h1>
            <AnimatedText
              open={true}
              text={"Software engineer and tech enthusiast."}
            />
          </h1>
        </div>
      </ParallaxLayer>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        onClick={handler}
      >
        <ScrollIndicator />
      </div>
    </>
  )
}

export default Intro
