import * as React from "react"
import * as ReactFullpage from "@fullpage/react-fullpage"

export const Fullpage = ({ children, handleUpdateIndex }) => {
  const onLeave = (origin, destination, direction) => {
    const { index } = destination
    console.log(index)

    handleUpdateIndex(index)
  }
  return (
    <ReactFullpage
      scrollingSpeed={700} /* Options here */
      scrollOverflow
      navigation
      easing="ease"
      css3
      onLeave={onLeave}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {children.map((child, i) => (
              <div key={i} className="section">
                {child}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
