import * as React from "react"
import { ParallaxLayer } from "@react-spring/parallax"
import { Link, graphql } from "gatsby"
import AnimatedHeader from "./common/animatedHeader"

const ProjectList = ({ posts, startOffset }) => {
  return (
    <>
      <ParallaxLayer
        offset={startOffset - 0.1}
        speed={0.3}
        className="background-tile-white background-tile-sticky"
        factor={1.5}
      />
      {/* TODO: FIX THIS HEADER NOT STICKING CORRECTLY SOMETIMES */}
      <ParallaxLayer
        // offset={startOffset + 0.1}
        //speed={0.2}
        sticky={{ start: startOffset - 0.1, end: startOffset + 2 }}
        style={{
          paddingTop: "2em",
          left: "1em",
          width: "300px",
          height: "auto",
        }}
      >
        <AnimatedHeader text="Projects." />
      </ParallaxLayer>
      <ParallaxLayer offset={startOffset} speed={0.4}>
        <div className="section bg-white">
          <h2>My latest projects</h2>
          <ol style={{ listStyle: `none` }}>
            {/* TODO: Paginate (pagesize 4) */}
            {posts.slice(0, 4).map(post => {
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
            {/* <li>
              <button>Read all posts</button>
            </li> */}
          </ol>
        </div>
      </ParallaxLayer>
    </>
  )
}

export default ProjectList
