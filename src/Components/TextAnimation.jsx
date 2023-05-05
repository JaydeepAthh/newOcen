import React, { useEffect, useState, useRef } from "react";
import { Parallax, Background } from "react-parallax";
import TextAnimation2 from "./TextAnimation2";
import styles from "../assets/styles/Home.module.css";
import "animate.css";

export default function TextAnimation() {
  const myElementRef = useRef(null);
  const [isElementVisible, setIsElementVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".textos");
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsElementVisible(true);
      } else {
        setIsElementVisible(false);
      }
    });
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  console.log(isElementVisible);
  return (
    <>
      <div className="textos">
        <h1
          className={
            isElementVisible == true
              ? "animate__animated animate__fadeInRightBig"
              : null
          }
        >
          THE OCEANS <br /> NEED YOUR <br /> HELP
        </h1>
      </div>
    </>
  );
}
