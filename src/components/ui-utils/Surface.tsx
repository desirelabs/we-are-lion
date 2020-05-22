import React from "react";

export const Surface = props => {
  const { className, view, trbl, style, children, ...other } = props;
  // uses bottom-padding hack. See https://css-tricks.com/scale-svg/
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "fixed",
        right: 0,
        width: "100%",
        height: "1200px",
        zIndex: -1
      }}
      {...other}
    >
      <svg
        preserveAspectRatio="none"
        viewBox={`0 0 ${view[0]} ${view[1]}`}
        style={{
          position: "fixed",
          right: -1,
          top: 0,
          zIndex: -1,
          transform: "scaleX(1.1)"
        }}
      >
        <g transform={`translate(${trbl[3]} ,${trbl[0]})`}>{children}</g>
      </svg>
    </div>
  );
};
