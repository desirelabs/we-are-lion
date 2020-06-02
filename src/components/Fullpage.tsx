import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

interface FullPage {
  children: any;
  handleUpdateIndex?: (index: number) => void;
  navigation?: boolean;
}

export const Fullpage = ({
  children,
  handleUpdateIndex,
  navigation
}: FullPage) => {
  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  return (
    typeof window !== "undefined" && (
      <ReactFullpage
        licenseKey={"D439ACCB-C54B4528-8C740546-DCC0E4E1"}
        sectionSelector=".section"
        scrollingSpeed={700}
        pluginWrapper={() => require("fullpage.js/vendors/scrolloverflow")}
        scrollOverflow={true}
        navigation={navigation || false}
        easing="ease"
        css3={true}
        onLeave={onLeave}
        render={() => (
          <ReactFullpage.Wrapper>
            {React.Children.map(children, (child, i) => (
              <div key={i} className="section" style={{ height: "auto" }}>
                {child}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    )
  );
};
