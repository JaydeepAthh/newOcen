import React, { useEffect } from "react";
import Plx from "react-plx";

const testAnim = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
];

export default function TextAnimation2() {
  return (
    // <section className="textSection animate__animated animate__fadeInUpBig">
    //   <div className="textAniSection">
    //     <p className="">ITS TIME TO</p>
    //     <br />
    //     <p className="">MAKE A</p>
    //     <br />
    //     <p className="">DIFFERENCE</p>
    //     {/* <br /> <br />
    //       DIFFERENCE */}
    //   </div>
    // </section>
    <section className="textSection animate__animated animate__fadeInUpBig">
      <div className="textAniSection">
        <p className="">ITS TIME TO</p>
        <br />
        <p className="">MAKE A</p>
        <br />
        <p className="">DIFFERENCE</p>
        {/* <br /> <br />
          DIFFERENCE */}
      </div>
    </section>
  );
}
