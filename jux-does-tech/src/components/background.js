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

const Background = ({ startOffset = 0 }) => {
  let parallax

  return (
    <>
      {/* TODO: Change color of svg's to gray */}
      <ParallaxLayer offset={startOffset} speed={1.5}>
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "95%" }}
        />
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.2} speed={0.2}>
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "5%" }}
        />
        <img
          src="parallax/aws.svg"
          style={{ width: "80px", marginLeft: "55%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.4} speed={0.6}>
        <img
          src="parallax/aws.svg"
          style={{ width: "150px", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.6} speed={0.8}>
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "78%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.8} speed={1.5}>
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "95%" }}
        />
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.8} speed={-0.5}>
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "55%" }}
        />
        <img
          src="parallax/aws.svg"
          style={{ width: "50px", marginLeft: "85%" }}
        />
      </ParallaxLayer>
    </>
  )
}

export default Background
