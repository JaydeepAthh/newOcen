import React, { useState, useEffect, useRef } from "react";

export default function Roadmap2(props) {
  const [displayText, setDisplayText] = useState("Stop");
  const [checked1, setChecked1] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);

  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [data, setData] = useState(1);

  const setNumber = props.setNumber;

  const setCheck = (data) => {
    if (data === 0) {
      setChecked1(true);
      setChecked2(false);
      setChecked3(false);
    } else if (data === 1) {
      setChecked1(false);
      setChecked2(true);
      setChecked3(false);
    } else if (data === 2) {
      setChecked1(false);
      setChecked2(false);
      setChecked3(true);
    }
  };

  useEffect(() => {
    setData(props.data);
    setCheck(props.data);
    // handleRadioChange(props.data)
    console.log("scene number : ", props.data);
  }, [props.data]);

  const handleScroll = (e) => {
    const delta = e.deltaY;
    setScrollDistance(scrollDistance + Math.abs(delta));

    if (scrollDistance >= 5 * 180) {
      if (delta > 0 && data < 3) {
        setNumber(data + 1);
      } else if (delta < 0 && data > 0) {
        setNumber(data - 1);
      }
      setScrollDistance(0);
    }
  };
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className="main mainVisible resRoadmap"
      ref={ref}
      id="roadmap"
      onWheel={handleScroll}
      style={{ background: "white" }}
    >
      <input type="radio" id="scene-5" defaultValue={5} checked={checked1} />
      <input type="radio" id="scene-6" defaultValue={6} checked={checked2} />
      <input type="radio" id="scene-7" defaultValue={7} checked={checked3} />
      <main id="site" className="roadmap">
        <div className="">
          <div className="roadmap-text1 ocean-text roadmap-1">roadmap</div>
        </div>

        <div className="roadmap-bottom">
          <div className="cards" data-scene={5}>
            <div className=" fact card">
              <h2 className="heading">Milestone 1</h2>
              <p className="paragraph">
                Frosty Narwhals relaunch allows for collaboration between
                multiple projects to give holders hidden perks with their new
                mints.
              </p>
            </div>
            <div className="fact card">
              <h2 className="heading">Milestone 2</h2>
              <p className="paragraph ">
                Frosty Narwhals relaunch allows for collaboration between
                multiple projects to give holders hidden perks with their new
                mints.
              </p>
            </div>
          </div>
          <div className="cards" data-scene={6}>
            <div className=" fact card">
              <h2 className="  heading">Milestone 3</h2>
              <p className=" paragraph">
                Frosty Narwhals relaunch allows for collaboration between
                multiple projects to give holders hidden perks with their new
                mints.
              </p>
            </div>
            <div className="fact  card">
              <h2 className="  heading">Milestone 4</h2>
              <p className=" paragraph">
                Frosty Narwhals relaunch allows for collaboration between
                multiple projects to give holders hidden perks with their new
                mints.
              </p>
            </div>
          </div>
          <div className="cards" data-scene={7}>
            <div className=" fact card">
              <h2 className="  heading">Milestone 5</h2>
              <p className=" paragraph">
                Frosty Narwhals relaunch allows for collaboration between
                multiple projects to give holders hidden perks with their new
                mints.
              </p>
            </div>
            <div className="fact  card">
              <h2 className="  heading">Milestone 6</h2>
              <p className=" paragraph">
                Frosty Narwhals relaunch allows for collaboration between
                multiple projects to give holders hidden perks with their new
                mints.
              </p>
            </div>
          </div>
        </div>

        <div className="right-content">
          <nav className="slide-nav">
            <div
              className="nav-button -prev"
              onClick={() => setNumber(data - 1)}
            >
              &lt;
            </div>
            <div
              className="nav-button -next"
              onClick={() => setNumber(data + 1)}
            >
              Next &gt;
            </div>
            <div className="nav-button content">
              <div className="layer2" data-scene={5}>
                <p className="heading">ROADMAP</p>
              </div>
              <div className="layer2" data-scene={6}>
                <p className="heading">ROADMAP</p>
              </div>
              <div className="layer2" data-scene={7}>
                <p className="heading">ROADMAP</p>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
