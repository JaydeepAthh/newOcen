import normalizeWheel from "normalize-wheel";
import { useState, useRef, useEffect } from "react";
import Roadmap from "./Components/Roadmap";
import Roadmap2 from "./Components/Roadmap2";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bg from "./assets/public/1.webp";
import bg4 from "./assets/public/4.webp";
import bg7 from "./assets/public/7.webp";
import Loader from "./Components/Loader";
import { Parallax, Background } from "react-parallax";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroHeader from "./Components/HeroHeader";
import MainAnimation from "./Components/MainAnimation";
import "./assets/styles/globals.css";
import "./assets/styles/page-css.css";
// import styles from "./assets/styles/Home.module.css";
import TextAnimation from "./Components/TextAnimation";
import Page02 from "./Components/Page02";
import PageAnimPage from "./Components/StopAnimPage";
import Doner from "./Components/Doner";
import Mint from "./Components/Mint";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import style from "./assets/styles/Home.module.css";
import DonerAndMint from "./Components/DonerAndMint";
import Header from "./Components/Header";

const loaderStyles = {
  opacity: 1,
  animation: `${style.loaderMove} 3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
  animationIterationCount: "infinite",
  animationDirection: "normal",
  animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  animationDelay: "1.5s",
  backgroundColor: "white",
  width: "80vw",
};

function Home() {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [wheelData, setwheeldata] = useState(0);
  const [activewheeldata, setactivewheeldata] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  // const handleWheel = (e) => {
  //   const normalizedWheel = normalizeWheel(e);
  //   const commonValue = normalizedWheel.spinY;
  //   // console.log(commonValue)
  //   if (commonValue > 0) {
  //     if (commonValue < 0.5) {
  //       setwheeldata((e) => commonValue / 2);
  //     } else {
  //       setwheeldata((e) => 0.5);
  //     }
  //   } else {
  //     if (commonValue > -0.5) {
  //       setwheeldata((e) => commonValue);
  //     } else {
  //       setwheeldata((e) => -0.5);
  //     }
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    // document.addEventListener("DOMMouseScroll", handleWheel, false);
    // document.addEventListener("mousewheel", handleWheel, true);
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex" }}>
          <div style={loaderStyles}>
            <Loader />
          </div>
        </div>
      ) : (
        <div className="mainHome">
          <Header />
          {/* <Parallax strength={10}> */}
          <div>
            <HeroHeader />
          </div>
          {/* <PageAnimPage /> */}
          {/* </Parallax> */}

          {/* <Parallax strength={500} horizontal={true}> */}
          {/* <div className="horizontal-container"> */}
          <MainAnimation data={number} setNumber={setNumber} />
          {/* </div> */}
          {/* </Parallax> */}

          <div className="biggerTextos bg-white">
            {/* <Parallax style={{ backgroundColor: "white" }} strength={500}> */}
            <TextAnimation />
            {/* </Parallax> */}
          </div>

          {/* <Parallax bgImage={bg} strength={500}> */}
          <Page02 />
          {/* </Parallax> */}

          {/* <div className="donerMintTry"> */}
          {/* <Parallax
              strength={500}
              style={{ height: "680px", backgroundColor: "white" }}
            > */}
          {/* </Parallax> */}
          {/* </div> */}
          <Roadmap data={number2} setNumber={setNumber2} />
          <Roadmap2 data={number2} setNumber={setNumber2} />
          {/* <Parallax bgImage={bg} strength={500}> */}
          <Team />
          <DonerAndMint />
          {/* </Parallax> */}
          {/* <Parallax bgImage={bg} strength={500}> */}

          {/* </Parallax> */}
          {/* <Parallax bgImage={bg} strength={500}> */}
          <Footer />
          {/* </Parallax> */}
        </div>
      )}
    </>
  );
}

export default Home;
