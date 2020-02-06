import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export const Fullpage = ({ children }) => (
  <ReactFullpage
    licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
    scrollingSpeed={700} /* Options here */
    scrollOverflow
    navigation
    easing="ease"
    css3
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {children.map((child, i) => (
            <div className="section">{child}</div>
          ))}
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
