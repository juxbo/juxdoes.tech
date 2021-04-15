import * as React from "react"
import Github from "../../icons/github.svg"
import LinkedIn from "../../icons/linkedin.svg"
import Mail from "../../icons/mail.svg"

export const Icon = ({ name, link }) => {
  const getIcon = iname => {
    switch (iname) {
      case "github":
        return <Github />
      case "linkedin":
        return <LinkedIn />
      case "mail":
        return <Mail />
      default:
        return null
    }
  }

  return (
    <a href={link} className={`hoverable-icon ${name}`}>
      {getIcon(name)}
    </a>
  )
}
