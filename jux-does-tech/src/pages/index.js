import * as React from "react"
import { Link, graphql } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "juxdoes"
  const posts = data.allMarkdownRemark.nodes

  let parallax
  const parallaxRef = React.useRef(null)

  const onScroll = () =>
    console.log(parallaxRef.current.current / parallaxRef.current.space)

  React.useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return
    parallaxRef.current.container.onscroll = onScroll
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* TODO: Fix this container being limited by layout thingy */}
      <Parallax pages={2.5} ref={parallaxRef} style={{ left: 0 }}>
        {/* <button onClick={() => parallaxRef.current.scrollTo(4)}>f</button> */}
        {/* <Background /> */}
        <Intro
          startOffset={0.3}
          handler={() => {
            console.log("teschsifauhaiu")
          }}
        />
        <About startOffset={1} />
        {/* <Background startOffset={1} /> */}
        <ParallaxLayer
          offset={1.9}
          speed={0.4}
          className="background-tile-white"
          factor={2}
        />
        {/* TODO: Paginate (pagesize 4) */}
        <ParallaxLayer offset={2} speed={0.3}>
          <div className="section">
            <h2>My personal Blog</h2>
            <ol style={{ listStyle: `none` }}>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                  <li key={post.fields.slug}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <h2>
                          <Link to={post.fields.slug} itemProp="url">
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </h2>
                        <small>{post.frontmatter.date}</small>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </article>
                  </li>
                )
              })}
            </ol>
          </div>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default BlogIndex

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
