import * as React from "react"
import { Link, graphql } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Skills from "../components/skills"
import ProjectList from "../components/project-list"

import Aws from "../icons/aws.svg"
import Heart from "../icons/heart.svg"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Spring } from "@react-spring/web"
import FooterContent from "../components/common/footerContent"
import Bio from "../components/bio"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "juxdoes"
  const posts = data.allMarkdownRemark.nodes

  const parallaxRef = React.useRef(null)

  const scroll = to => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to)
    }
  }

  console.log(posts)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <nav className="main-nav">
        {/* juxco.de */}
        <ul>
          <li>
            <a href="#" onClick={() => scroll(0)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scroll(1)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scroll(2.2)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scroll(3)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scroll(4)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* TODO: Fix this container being limited by layout thingy */}
      <Parallax
        className="parallax-main"
        pages={3}
        ref={parallaxRef}
        style={{ left: 0 }}
      >
        {/* <button onClick={() => parallaxRef.current.scrollTo(4)}>f</button> */}
        {/* <Background /> */}
        <Intro startOffset={0.2} handler={() => scroll(1)} />
        <Skills startOffset={1} />
        <ProjectList posts={posts} startOffset={2.2} />
        <About startOffset={3} />
        {/* <Background startOffset={1} /> */}
        {/* TODO: Built-with section */}
        <ParallaxLayer offset={3.8} speed={0.6} className="parallax-footer">
          <div className="section credits" style={{ fontSize: "12px" }}>
            <strong>
              Built with <Heart /> by{" "}
              <a href="https://github.com/mrzeldaguy">Jux</a>
            </strong>
            <p>
              Powered by <a href="https://www.gatsbyjs.com/">Gatsby</a>
              <br />
              Deployed on <Aws alt={"aws"} />
              <br />
              Background generated via{" "}
              <a href="https://www.svgbackgrounds.com">SVGBackgrounds.com</a>
            </p>
            <FooterContent />
          </div>
          <Bio />
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
