import * as React from "react"
import { useSpring, animated } from "@react-spring/web"
import VisibilitySensor from "react-visibility-sensor"
import Arrow from "../../icons/arrow-down.svg"

// import * as styles from "./progress.module.css"

const ScrollIndicator = ({ ...props }) => {
  const [isVis, setVisible] = React.useState(true)
  const spring = useSpring({
    from: {
      top: "80vh",
    },
    to: {
      top: "82vh",
    },
    loop: { reverse: true },
    cancel: !isVis,
  })

  return (
    <div>
      <VisibilitySensor
        onChange={isVis => {
          setVisible(isVis)
        }}
      >
        <animated.div
          className={"scroll-indicator"}
          style={{
            ...spring,
            position: "absolute",
            height: "2em",
            width: "2em",
          }}
        >
          <Arrow style={{ width: "2em" }} />
        </animated.div>
      </VisibilitySensor>
    </div>
  )
}

export default ScrollIndicator
