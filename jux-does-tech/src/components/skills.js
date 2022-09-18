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
import Arrow from "../icons/arrow-down.svg"
import { useSpring, a } from "@react-spring/web"
import useMeasure from "react-use-measure"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons"
import {
  faDatabase,
  faTable,
  faFile,
  faNetworkWired,
  faUserGroup,
  faServer,
} from "@fortawesome/free-solid-svg-icons"

// TODO: Sort by progress (proficiency)
const skillTree = [
  {
    name: "Java",
    progress: 90,
    icon: faJava,
    children: [
      {
        name: "Spring Boot",
        progress: 90,
      },
      {
        name: "Maven",
        progress: 85,
      },
      {
        name: "JPA",
        progress: 70,
      },
      {
        name: "Gradle",
        progress: 65,
      },
    ],
  },
  {
    name: "Data stores",
    progress: 75,
    icon: faDatabase,
    children: [
      {
        name: "SQL",
        icon: faTable,
        progress: 85,
      },
      {
        name: "NoSQL",
        icon: faFile,
        progress: 80,
        children: [
          {
            name: "MongoDB",
            icon: faFile,
            progress: 85,
          },
          {
            name: "Neo4j",
            icon: faNetworkWired,
            progress: 80,
          },
        ],
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    progress: 40,
    icon: faServer,
    children: [
      {
        name: "Docker",
        progress: 65,
      },
      {
        name: "AWS",
        progress: 45,
      },
      {
        name: "GCP",
        progress: 35,
      },
      {
        name: "Ansible",
        progress: 35,
      },
      {
        name: "K8s",
        progress: 15,
      },
    ],
  },
  {
    name: "Frontend, JS & Web",
    progress: 40,
    icon: faJs,
    children: [
      {
        name: "React",
        progress: 85,
      },
      {
        name: "HTML + CSS",
        progress: 85,
      },
      {
        name: "Vue 3",
        progress: 55,
      },
      {
        name: "node",
        progress: 45,
      },
      {
        name: "tailwind",
        progress: 45,
      },
      {
        name: "Angular",
        progress: 25,
      },
      {
        name: "Sass",
        progress: 25,
      },
      {
        name: "tauri",
        progress: 45,
      },
    ],
  },
  {
    name: "General SE Knowledge",
    progress: 90,
    icon: faUserGroup,
    children: [
      {
        name: "SCRUM",
        progress: 90,
      },
      {
        name: "Git",
        progress: 85,
      },
      {
        name: "SVN",
        progress: 85,
      },
      {
        name: "OpenAPI",
        progress: 80,
      },
      {
        name: "UX research",
        progress: 60,
      },
      {
        name: "Unix",
        progress: 55,
      },
      {
        name: "Bash",
        progress: 50,
      },
      {
        name: "Atlassian Tools (Jira, Confluence)",
        progress: 75,
      },
      {
        name: "Sonarqube",
        progress: 75,
      },
    ],
  },
  {
    name: "Other",
    progress: 20,
    icon: faPython,
    children: [
      {
        name: "Python",
        progress: 30,
      },
      {
        name: "Data Visualization",
        progress: 30,
      },
      {
        name: "Common LISP",
        progress: 15,
      },
      {
        name: "C++11",
        progress: 10,
      },
    ],
  },
]

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
        {/* TODO: Create section component, allow multiple foldable sub-categories */}
        {skillTree.map(obj => {
          return (
            <SkillSection
              key={obj.name}
              name={obj.name}
              progress={obj.progress}
              icon={obj.icon}
              children={obj.children}
            />
          )
        })}
      </ParallaxLayer>
    </>
  )
}

// TODO: Show summary of children as text by flat mapping without expand
// TODO: Collapse others on expand
const SkillSection = ({ name, progress, children, condensed, icon }) => {
  const [isOpen, setOpen] = React.useState(false)
  const [ref, { height: viewHeight }] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  })

  const childSummary = children ? children.flatMap(obj => obj.name) : []

  const childSection = children ? (
    <div>
      <a.div
        className="skilltree-content"
        style={{
          opacity,
          height: height,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <a.div ref={ref} style={{ y }}>
          {children.map(obj => {
            return (
              <SkillSection
                key={obj.name}
                name={obj.name}
                progress={obj.progress}
                icon={obj.icon}
                children={obj.children}
                condensed={true}
              />
            )
          })}
        </a.div>
      </a.div>
      <div className="expand-indicator" onClick={() => setOpen(!isOpen)}>
        <TurnArrow open={isOpen} />
      </div>
    </div>
  ) : (
    <></>
  )

  if (condensed) {
    return (
      <div className="condensed-skills">
        <SkillEntry
          name={name}
          progress={progress}
          condensed={true}
          icon={icon}
          summary={childSummary}
        />
        {childSection}
      </div>
    )
  }

  return (
    <div className="card section no-bottom-pad">
      <SkillEntry
        name={name}
        progress={progress}
        icon={icon}
        summary={childSummary}
        // children={children}
      />
      {childSection}
    </div>
  )
}

const TurnArrow = ({ open }) => {
  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: {
      rotate: open ? 180 : 0,
    },
  })

  return (
    <a.div style={{ rotate }}>
      <Arrow style={{ display: "block", width: "1.2em" }} />
    </a.div>
  )
}

const SkillEntry = ({ name, icon, progress, condensed, summary }) => {
  const iconElement = icon ? (
    <span className="skill-entry-summary-icon">
      <FontAwesomeIcon icon={icon} />
    </span>
  ) : (
    <></>
  )
  return (
    <div className="skill-entry">
      <div className="skill-entry-summary">
        {condensed ? (
          <h6>
            {iconElement}
            {name}
          </h6>
        ) : (
          <h2>
            {iconElement}
            {name}
          </h2>
        )}
        {/* TODO: Build string from array, and add X others */}
        <p className="skill-entry-summary-text">{summary.join(", ")}</p>
      </div>
      <Progress max={progress} showText={!condensed} />
    </div>
  )
}

export default Skills
