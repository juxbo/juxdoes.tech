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

const Intro = ({ startOffset, handler }) => {
  let parallax

  return (
    <>
      <ParallaxLayer
        offset={0.1}
        speed={0.1}
        factor={0.8}
        className="background-tile-tr background-tile-right"
      />
      <ParallaxLayer offset={startOffset} speed={0.2}>
        <Bio handler={handler} />
      </ParallaxLayer>
      {/* TODO: Add a scroll indicator thingy */}
    </>
  )
}

export default Intro
