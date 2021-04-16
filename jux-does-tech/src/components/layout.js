import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const titleArr = title.split(".")
  let header

  if (isRootPath) {
    header = (
      <></>
      // <h1 className="main-heading">
      //   <Link to="/">
      //     {titleArr[0]}
      //     <span className="title-contrast">.{titleArr[1]}</span>
      //   </Link>
      // </h1>
    )
  } else {
    header = (
      <header className="global-header">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      </header>
    )
  }

  return (
    <div
      className={isRootPath ? "" : "global-wrapper"}
      data-is-root-path={isRootPath}
    >
      {header}
      <main>{children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
