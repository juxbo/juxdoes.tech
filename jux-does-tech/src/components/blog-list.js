import * as React from "react"
import { ParallaxLayer } from "@react-spring/parallax"
import { Link, graphql } from "gatsby"

const BlogList = ({ posts }) => {
  return (
    <>
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
        </div>
      </ParallaxLayer>
    </>
  )
}

export default BlogList
