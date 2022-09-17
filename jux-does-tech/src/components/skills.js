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
import AnimatedHeader from "./common/animatedHeader"
import Progress from "./common/progress"

const Skills = ({ startOffset }) => {
  let parallax

  return (
    <>
      <ParallaxLayer
        className="background-tile-tr background-tile-left background-tile-sticky"
        offset={startOffset - 0.1}
        // factor={0.8}
        // sticky={{ start: startOffset, end: 1.2 }}
      />
      {/* <Background startOffset={1} /> */}
      <ParallaxLayer
        // offset={startOffset + 0.1}
        // speed={0.2}
        sticky={{ start: startOffset, end: 2 }}
        style={{ paddingTop: "2em", left: "1em", width: "300px" }}
      >
        <AnimatedHeader text="Skills." />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset + 0.2} speed={0.2}>
        <div className="card section">
          <h2>Java</h2>
          <Progress max={90} />
        </div>
        <div className="card section">
          <h2>DevOps</h2>
          <Progress max={55} />
        </div>
        <div className="card section">
          <h2>Something</h2>
          <Progress max={95} />
        </div>
        <div className="card section">
          <h2>Something</h2>
          <Progress max={15} />
        </div>
      </ParallaxLayer>
    </>
  )
}

export default Skills
