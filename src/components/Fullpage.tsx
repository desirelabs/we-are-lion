import * as React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export const Fullpage = ({ children, handleUpdateIndex }) => {
  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      sectionSelector=".section"
      scrollingSpeed={700}
      pluginWrapper={() => require("fullpage.js/vendors/scrolloverflow")}
      scrollOverflow={true}
      navigation={true}
      easing="ease"
      css3={true}
      onLeave={onLeave}
      render={() => (
        <ReactFullpage.Wrapper>
          {React.Children.map(children, (child, i) => (
            <div key={i} className="section">
              {child}
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};
