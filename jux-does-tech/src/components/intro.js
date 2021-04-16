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

const Intro = ({ startOffset }) => {
  let parallax

  return (
    <>
      <ParallaxLayer offset={startOffset} speed={0.5}>
        <Bio />
      </ParallaxLayer>
    </>
  )
}

export default Intro
