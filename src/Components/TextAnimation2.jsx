import React, { useEffect } from "react";

export default function TextAnimation2() {
  return (
    <section className="textSection animate__animated animate__fadeInUpBig">
      <div className="textAniSection">
        <p className="animate__animated animate__fadeInRightBig animate__delay-2s">
          ITS TIME TO
        </p>
        <br />
        <p className="animate__animated animate__fadeInRightBig animate__delay-3s">
          MAKE A
        </p>
        <br />
        <p className="animate__animated animate__fadeInRightBig animate__delay-4s">
          DIFFERENCE
        </p>
        {/* <br /> <br />
          DIFFERENCE */}
      </div>
    </section>
  );
}
