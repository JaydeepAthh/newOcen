import React, { useEffect } from "react";
import Plx from "react-plx";
import { Parallax, Background } from "react-parallax";
const testAnim = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 10,
        endValue: 112,
        property: "fontSize",
      },
    ],
  },
];

export default function Page02() {
  return (
    <div className="page-02">
       <Parallax
        strength={700}
        renderLayer={(percentage) => (
          <div
            className="text-clip"
            style={{
              backgroundPositionY: percentage * 50
            }}
          >
            ITS TIME TO
            <br />
            MAKE A
            <br />
            DIFFERENCE
          </div>
        )}
      ></Parallax>
      </div>
  );
}
