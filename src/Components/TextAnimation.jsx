import React, { useEffect, useState, useRef } from "react";
import TextAnimation2 from "./TextAnimation2";
import styles from "../assets/styles/Home.module.css";
import "animate.css";

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

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        sectionRef.current.classList.add(
          "animate__animated",
          "animate__fadeInUp"
        );
      } else {
        sectionRef.current.classList.remove(
          "animate__animated",
          "animate__fadeInUp"
        );
      }
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // console.log(isVisible);
  return (
    <>
      <div className="textos" ref={sectionRef}>
        {isVisible === false ? (
          <h1>
            THE OCEANS <br /> NEED YOUR <br /> HELP
          </h1>
        ) : (
          <div className="">
            <TextAnimation2 />
          </div>
        )}
      </div>
    </>
  );
}
