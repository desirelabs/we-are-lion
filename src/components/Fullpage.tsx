import * as React from "react"
import { useLayoutEffect, useRef, useState } from "react"
import * as ReactFullpage from "@fullpage/react-fullpage"

const SEL = "custom-section"
const SECTION_SEL = `.${SEL}`

export const Fullpage = ({ children, handleUpdateIndex }) => {
  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction })
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  return (
    <ReactFullpage
      debug /* Debug logging */
      // Required when using extensions
      // pluginWrapper={pluginWrapper}
      // fullpage options
      licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
      navigation
      anchors={["firstPage", "secondPage", "thirdPage"]}
      sectionSelector={SECTION_SEL}
      onLeave={onLeave}
      // sectionsColor={state.sectionsColor}
      render={comp => <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>}
    />
  )
}
