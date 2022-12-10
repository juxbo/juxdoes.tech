import * as React from "react"
import { useSpring, animated } from "@react-spring/web"
import VisibilitySensor from "react-visibility-sensor"

import * as styles from "./progress.module.css"

const Progress = ({
  max = 100,
  showText = true,
  condensed = false,
  ...props
}) => {
  const [isVis, setVisible] = React.useState(false)
  const spring = useSpring({
    width: isVis ? max + "%" : "0%",
  })

  return (
    <div className={styles.outer} style={{ height: condensed ? 20 : 50 }}>
      <VisibilitySensor
        onChange={vis => {
          // Only set to true the first time its visible
          if (vis) setVisible(true)
        }}
      >
        <>
          <animated.div className={styles.span}>
            {showText
              ? spring.width.to(x => parseFloat(x).toFixed(0) + " %")
              : ""}
          </animated.div>
          <animated.div className={styles.fill} style={spring} />
        </>
      </VisibilitySensor>
    </div>
  )
}

export default Progress
