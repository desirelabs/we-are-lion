import React from "react";
import { easeQuadOut } from "d3-ease";
import { Animate } from "react-move";
import { interpolate } from "flubber";
import { Surface } from "./Surface";

// **************************************************
//  SVG Layout
// **************************************************
const trbl = [0, 0, 0, 0]; // [top, right, bottom, left] margins

interface SvgPathTransformer {
  start: string;
  end: string;
  duration: number;
  width?: number | string;
  height?: number | string;
  fill: string;
}

export const SvgPathTransformer = ({
  start,
  end,
  duration,
  width = "100%",
  height = "100%",
  fill
}: SvgPathTransformer) => {
  const [path] = React.useState([start, end]);

  const interpolator = interpolate(path[0], path[1]);

  return (
    <div>
      <Surface view={[width, height]} trbl={trbl}>
        <Animate
          start={{
            opacity: 0,
            d: interpolator(1)
          }}
          enter={[
            {
              opacity: [1],
              timing: { duration: duration }
            }
          ]}
          update={{
            d: interpolator,
            timing: { duration: duration, ease: easeQuadOut }
          }}
        >
          {path => (
            <g>
              <path fill={fill} {...path} />
            </g>
          )}
        </Animate>
      </Surface>
    </div>
  );
};
