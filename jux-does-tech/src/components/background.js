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
import Github from "../icons/github.svg"

const Background = ({ startOffset = 0 }) => {
  let parallax
  const color = "#fff"

  return (
    <>
      {/* TODO: Change color of svg's to gray */}
      <ParallaxLayer offset={startOffset} speed={1.5} factor={2}>
        <Github style={{ fill: color, width: "50px", marginLeft: "95%" }} />
        <Github style={{ fill: color, width: "50px", marginLeft: "15%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.2} speed={-0.4} factor={2}>
        <Github style={{ fill: color, width: "50px", marginLeft: "5%" }} />
        <Github style={{ fill: color, width: "30px", marginLeft: "87%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.4} speed={0.6} factor={2}>
        <Github style={{ fill: color, width: "30px", marginLeft: "52%" }} />
        <Github style={{ fill: color, width: "20px", marginLeft: "34%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.6} speed={0.8}>
        <Github style={{ fill: color, width: "20px", marginLeft: "34%" }} />
        <Github style={{ fill: color, width: "70px", marginLeft: "90%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.8} speed={1.5}>
        <Github style={{ fill: color, width: "30px", marginLeft: "43%" }} />
        <Github style={{ fill: color, width: "60px", marginLeft: "98%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.8} speed={-0.5}>
        <Github style={{ fill: color, width: "50px", marginLeft: "15%" }} />
        <Github style={{ fill: color, width: "40px", marginLeft: "88%" }} />
      </ParallaxLayer>
    </>
  )
}

export default Background
