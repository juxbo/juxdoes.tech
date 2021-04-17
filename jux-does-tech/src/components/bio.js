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

const Bio = ({ handler }) => {
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
          <h2 style={{ fontSize: "2em", fontWeight: 1000 }}>
            <Tescht open={true} subtitle={author?.subtitle} />
          </h2>
          {/* TODO: This should scroll down but it doesn't */}
          {/* <a onClick={handler} href="#">
            Learn more about me...
          </a> */}
        </div>
      )}
      <Contact />
    </div>
  )
}

const Tescht = ({ open, subtitle, ...props }) => {
  const [done, setDone] = React.useState(0)
  const array = subtitle.split(" ")
  const [items, set] = React.useState(array)
  const trail = useTrail(items.length, {
    config: { mass: 20, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 200,
    onRest: () => {
      setDone(done + 1)
    },
  })
  if (done == array.length) {
    return (
      <>
        {array.map(val => {
          return (
            <div
              key={val}
              style={{ display: "inline-block", marginRight: ".2em" }}
            >
              {val}
            </div>
          )
        })}
      </>
    )
  }

  return (
    <>
      {trail.map(({ x, height, ...props }, index) => (
        <a.div
          key={items[index]}
          style={{
            ...props,
            display: "inline-block",
            transform: x.to(x => `translate3d(0,${x}px,0)`),
            marginRight: ".2em",
          }}
        >
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  )
}

export default Bio
