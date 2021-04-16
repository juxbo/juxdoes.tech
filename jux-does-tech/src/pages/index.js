import * as React from "react"
import { Link, graphql } from "gatsby"

import Background from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "juxdoes"
  const posts = data.allMarkdownRemark.nodes

  let parallax
  const parallaxRef = React.useRef(null)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* TODO: Fix this container being limited by layout thingy */}
      <Parallax pages={3} ref={parallaxRef} style={{ left: 0 }}>
        <Background />
        <Intro startOffset={0.3} />
        <ParallaxLayer offset={2} speed={0.5}>
          <h2>Personal Blog</h2>
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
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
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
