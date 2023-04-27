import normalizeWheel from "normalize-wheel";
import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bg from "./assets/public/1.webp";
import Loader from "./Components/Loader";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroHeader from "./Components/HeroHeader";
import MainAnimation from "./Components/MainAnimation";
import "./assets/styles/globals.css";
import styles from "./assets/styles/Home.module.css";
import ScrollContainer from "react-scroll-horizontal";
import TextAnimation from "./Components/TextAnimation";
import TextAnimation2 from "./Components/TextAnimation2";

const loaderStyles = {
  opacity: 1,
  animation: `${styles.loaderMove} 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
  animationIterationCount: "infinite",
  animationDirection: "normal",
  animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  animationDelay: "2s",
  backgroundColor: "white",
  width: "80vw",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [wheelData, setwheeldata] = useState(0);
  const [activewheeldata, setactivewheeldata] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);
  const ref = useRef(null);
  const [isHorizontalScrollingComplete, setIsHorizontalScrollingComplete] =
    useState(false);
  const horizontalSectionRef = useRef(null);

  const handleHorizontalScroll = () => {
    const container = horizontalSectionRef.current;
    if (
      container.scrollLeft ===
      container.scrollWidth - container.clientWidth
    ) {
      setIsHorizontalScrollingComplete(true);
    } else {
      setIsHorizontalScrollingComplete(false);
    }
  };
  const parallax = useRef(null);
  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  const handleVisible = () => {
    const screenHeight = 7;
    if (isVisible && activewheeldata < -screenHeight) {
      if (number > 0) {
        setNumber((prevNumber) => prevNumber + 1);
        setactivewheeldata((prevNumber) => 0);
        console.log("number > 0 : ", number);
      }
    } else if (isVisible && activewheeldata > screenHeight && number != 0) {
      if (number < 3) {
        setNumber((prevNumber) => prevNumber + 1);
        setactivewheeldata((prevNumber) => 0);

        console.log("number < 3 : ", number);
      }
    } else if (isVisible && activewheeldata > screenHeight) {
      setNumber((prevNumber) => prevNumber + 1);
      setactivewheeldata((prevNumber) => 0);
    }
    if (number == 3 && activewheeldata > screenHeight) {
      setactivewheeldata((prevNumber) => 0);
    }
    if (number == 0 && activewheeldata < -screenHeight) {
      setactivewheeldata((prevNumber) => 0);
    }
  };
  const handleVisible2 = () => {
    const screenHeight = 7;
    if (isVisible && activewheeldata < -screenHeight) {
      if (number > 0) {
        setNumber((prevNumber) => prevNumber + 1);
        setactivewheeldata((prevNumber) => 0);
        console.log("number > 0 : ", number);
      }
    } else if (isVisible && activewheeldata > screenHeight && number != 0) {
      if (number < 3) {
        setNumber((prevNumber) => prevNumber + 1);
        setactivewheeldata((prevNumber) => 0);

        console.log("number < 3 : ", number);
      }
    } else if (isVisible && activewheeldata > screenHeight) {
      setNumber((prevNumber) => prevNumber + 1);
      setactivewheeldata((prevNumber) => 0);
    }
    if (number == 3 && activewheeldata > screenHeight) {
      setactivewheeldata((prevNumber) => 0);
    }
    if (number == 0 && activewheeldata < -screenHeight) {
      setactivewheeldata((prevNumber) => 0);
    }
  };
  const handleScroll = () => {
    const element = document.getElementById("my-element");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
      speed: 2,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setactivewheeldata((prevNumber) => prevNumber + wheelData);
          // console.log(activewheeldata)
        }
      });
    }, options);
    if (element && element instanceof Element) {
      observer.observe(element);
    }
  };
  const handleScroll2 = () => {
    const element = document.getElementById("my-element2");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
      speed: 2,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setactivewheeldata((prevNumber) => prevNumber + wheelData);
          // console.log(activewheeldata)
        }
      });
    }, options);
    if (element && element instanceof Element) {
      observer.observe(element);
    }
  };

  useEffect(() => {
    handleVisible();
    handleVisible2();
    handleScroll();
    handleScroll2();
  });

  const handleWheel = (e) => {
    const normalizedWheel = normalizeWheel(e);
    const commonValue = normalizedWheel.spinY;
    // console.log(commonValue)
    if (commonValue > 0) {
      if (commonValue < 0.5) {
        setwheeldata((e) => commonValue / 2);
      } else {
        setwheeldata((e) => 0.5);
      }
    } else {
      if (commonValue > -0.5) {
        setwheeldata((e) => commonValue);
      } else {
        setwheeldata((e) => -0.5);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4800);

    document.addEventListener("DOMMouseScroll", handleWheel, false);
    document.addEventListener("mousewheel", handleWheel, true);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div style={{ display: "flex" }}>
          <div style={loaderStyles}>
            <Loader />
          </div>
        </div>
      ) : (
        <div style={{ width: "100%", height: "100%", background: "#fff" }}>
          <Parallax pages={3.5}>
            <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              style={{
                backgroundImage: "url(src/assets/public/1.webp)",
                backgroundSize: "cover",
              }}
            />

            <ParallaxLayer
              offset={0}
              speed={0.5}
              // onClick={() => parallax.current.scrollTo(1)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HeroHeader />
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={0.5}
              // sticky={{ start: 1, end: 4 }}
              // onClick={() => parallax.current.scrollTo(2)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="horizontal-section">
                <MainAnimation data={number} setNumber={setNumber} />
              </div>
              {/* <img src={url("bash")} style={{ width: "40%" }} /> */}
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={0.5}
              // onClick={() => parallax.current.scrollTo(1)}
              style={{
                top: "-371px",
              }}
            >
              <TextAnimation />
            </ParallaxLayer>
            {/* <ParallaxLayer
              offset={2}
              speed={0.5}
              // onClick={() => parallax.current.scrollTo(1)}
            >
              
            </ParallaxLayer> */}
          </Parallax>
        </div>
      )}
    </div>
  );
}

export default App;
