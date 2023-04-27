import React, { useEffect, useState, useRef } from "react";
import TextAnimation2 from "./TextAnimation2";
import styles from "../assets/styles/Home.module.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const textStyles = {
  // opacity: 1,
  animation: `${styles.textAnimation} 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
  animationIterationCount: "infinite",
  animationDirection: "normal",
  animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  animationDelay: "2s",
};

export default function TextAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observertext = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showtext");
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
          }, 5000);
        } else {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      });
    });
    observertext.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    const observertext = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showtext");
        }
      });
    });
    const hiddenText = document.querySelectorAll(".text h1");
    hiddenText.forEach((el) => observertext.observe(el));
  });

  // console.log(isVisible);
  return (
    <>
      <div className="text" ref={sectionRef}>
        {isVisible === false ? (
          <h1>
            THE OCEANS <br /> NEED YOUR <br /> HELP
          </h1>
        ) : (
          <div className={textStyles}>
            <TextAnimation2 />
          </div>
        )}
      </div>
    </>
  );
}
