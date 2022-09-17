import * as React from "react"
import { useSpring, animated } from "@react-spring/web"
import VisibilitySensor from "react-visibility-sensor"

const AnimatedHeader = ({ open, text, ...props }) => {
  const [isVis, setVisible] = React.useState(false)
  const array = text.split(" ")
  const [items, set] = React.useState(array)
  const spring = useSpring({
    config: { mass: 1, tension: 200, friction: 100 },
    to: async (next, cancel) => {
      if (isVis || open) {
        await next({ left: "3vw" })
      }
    },
    from: { left: "45vw" },
    delay: 200,
  })

  return (
    <animated.div className="animated-header" style={spring}>
      <VisibilitySensor
        onChange={isVis => {
          // Only set to true the first time its visible
          if (isVis) setVisible(true)
        }}
      >
        <h1>{text}</h1>
      </VisibilitySensor>
    </animated.div>
  )
}

export default AnimatedHeader
