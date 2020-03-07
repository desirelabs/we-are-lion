import * as React from "react";
// import * as ReactFullpage from "@fullpage/react-fullpage"
import ReactFullpage from "./ReactFullpage";

export const Fullpage = ({ children, handleUpdateIndex }) => {
  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  return (
    <ReactFullpage
    // debug={true}
    // licenseKey={"YOUR_KEY_HERE"}
    // sectionSelector=".section"
    // scrollingSpeed={700} /* Options here */
    // scrollOverflow={true}
    // navigation={true}
    // easing="ease"
    // css3={true}
    // onLeave={onLeave}
    >
      {children.map(({ child }, i) => (
        <div key={i} className="section">
          {child}
        </div>
      ))}
    </ReactFullpage>
  );
};
