import * as React from "react"
import { useTrail, a } from "@react-spring/web"

const AnimatedText = ({ open, text, ...props }) => {
  const [done, setDone] = React.useState(0)
  const array = text.split(" ")
  const [items, set] = React.useState(array)
  const trail = useTrail(items.length, {
    config: { mass: 20, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 200,
    onRest: () => {
      setDone(done + 1)
    },
  })
  if (done == array.length) {
    return (
      <>
        {array.map(val => {
          return (
            <div
              key={val}
              style={{ display: "inline-block", marginRight: ".2em" }}
            >
              {val}
            </div>
          )
        })}
      </>
    )
  }

  return (
    <>
      {trail.map(({ x, height, ...props }, index) => (
        <a.div
          key={items[index]}
          style={{
            ...props,
            display: "inline-block",
            transform: x.to(x => `translate3d(0,${x}px,0)`),
            marginRight: ".2em",
          }}
        >
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  )
}

export default AnimatedText
