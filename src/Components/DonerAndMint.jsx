import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";

const DonerAndMint = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const pinRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 1,
          pin: true,
          // horizontal: true,
        },
      }
    );
    pinRef.current = pin;

    return () => {
      if (pinRef.current) {
        pinRef.current.scrollTrigger.disable();
        pinRef.current.kill();
      }
    };
  });

  return (
    <>
      <div className="conditionalWrapper" ref={triggerRef}>
        {/* <div> */}
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="mintcontainer">
            <div className="mint" id="mint">
              <div>
                <div>
                  <h1 className="">INVEST IN</h1>
                  <br />
                  <h1 className="">SUSTAINABLE</h1>
                  <br />
                  <h1 className="nowrap">GLOBAL FISHERIES</h1>
                </div>
                <div className="mint_container ">
                  <Link to="/mint-buy">
                    <button className="mintBtn">MINT</button>
                  </Link>
                  <p className="mint_text">
                    We at the Frosty Narwhals care about the environment. From
                    monthly donations, to beach clean ups, the Frosty Narwhals
                    strive to make putting the world at the top of our priority
                    list.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mintcontainer">
            <div className="mint donate" id="donate">
              <div>
                <div>
                  <h1 className="">DONATE IN</h1>
                  <br />
                  <h1 className="">SUSTAINABLE</h1>
                  <br />
                  <h1 className=" nowrap ">PROJECTS THAT CARE</h1>
                </div>
                <div className="mint_container">
                  <button className="mintBtn">Donate</button>
                  <p className="mint_text">
                    We at the Frosty Narwhals care about the environment. From
                    monthly donations, to beach clean ups, the Frosty Narwhals
                    strive to make putting the world at the top of our priority
                    list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* 
      <div className="conditionalWrapperRes">
        <div>
          <div className="scroll-section-inner">
            <div className="mintcontainer">
              <div className="mint" id="mint">
                <div>
                  <div>
                    <h1 className="">INVEST IN</h1>
                    <br />
                    <h1 className="">SUSTAINABLE</h1>
                    <br />
                    <h1 className="nowrap">GLOBAL FISHERIES</h1>
                  </div>
                  <div className="mint_container ">
                    <button className="btn">MINT</button>
                    <p className="mint_text">
                      We at the Frosty Narwhals care about the environment. From
                      monthly donations, to beach clean ups, the Frosty Narwhals
                      strive to make putting the world at the top of our
                      priority list.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mintcontainer">
              <div className="mint donate" id="donate">
                <div>
                  <div>
                    <h1 className="">DONATE IN</h1>
                    <br />
                    <h1 className="">SUSTAINABLE</h1>
                    <br />
                    <h1 className=" nowrap ">PROJECTS THAT CARE</h1>
                  </div>
                  <div className="mint_container">
                    <button className="btn">Donate</button>
                    <p className="mint_text">
                      We at the Frosty Narwhals care about the environment. From
                      monthly donations, to beach clean ups, the Frosty Narwhals
                      strive to make putting the world at the top of our
                      priority list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default DonerAndMint;
