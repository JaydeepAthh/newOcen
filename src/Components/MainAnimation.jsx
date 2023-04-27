import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import "animate.css";
export default function MainAnimation(props) {
  const [displayText, setDisplayText] = useState("Stop");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);

  const [data, setData] = useState(1);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setNumber = props.setNumber;

  const setCheck = (data) => {
    if (data === 0) {
      setChecked1(true);
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
    } else if (data === 1) {
      setChecked1(false);
      setChecked2(true);
      setChecked3(false);
      setChecked4(false);
    } else if (data === 2) {
      setChecked1(false);
      setChecked2(false);
      setChecked3(true);
      setChecked4(false);
    } else if (data === 3) {
      setChecked1(false);
      setChecked2(false);
      setChecked3(false);
      setChecked4(true);
    }
  };

  useEffect(() => {
    setData(props.data);
    setCheck(props.data);
    // handleRadioChange(props.data)
    console.log("scene number : ", props.data);
  }, [props.data]);

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

  const handleScroll = (e) => {
    const delta = e.deltaY;
    setScrollDistance(scrollDistance + Math.abs(delta));

    if (scrollDistance >= 5 * 220) {
      // assuming each scroll is 120px
      if (delta > 0 && data < 3) {
        setNumber(data + 1);
      } else if (delta < 0 && data > 0) {
        setNumber(data - 1);
      }
      setScrollDistance(0);
    }

    // Validate the state value after updating it
    setNumber((prevState) => {
      if (prevState < 0) {
        return 0;
      } else if (prevState > 3) {
        return 3;
      } else {
        return prevState;
      }
    });
  };

  return (
    <div
      className={`main ${isVisible ? "mainVisible" : null}`}
      ref={ref}
      onWheel={handleScroll}
    >
      <input type="radio" id="scene-1" defaultValue={1} checked={checked1} />
      <input type="radio" id="scene-2" defaultValue={2} checked={checked2} />
      <input type="radio" id="scene-3" defaultValue={3} checked={checked3} />
      <input type="radio" id="scene-4" defaultValue={4} checked={checked4} />
      <main id="site">
        <div className="ocean">
          {props.data === 0 && (
            <div className="ocean-text1 ocean-text ocean-1 ">STOP</div>
          )}
          {props.data === 1 && (
            <div className="ocean-text1 ocean-text ocean-1">STOP</div>
          )}
          {props.data === 2 && (
            <div className="ocean-text2 ocean-text ocean-2">Save</div>
          )}
          {props.data === 3 && (
            <div className="ocean-text2 ocean-text ocean-2">Save</div>
          )}
        </div>
        <div className="left-side">
          <div className="page-numbers" data-total="04">
            {/* <div className='number_font'><div className="page-number -tens"></div> */}
            <div className="page-number ">
              {checked1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="50px"
                  viewBox="0 0 222 176"
                  fill="#fff"
                >
                  <path
                    d="M116.148 102.57C116.148 119.523 113.727 133.352 108.883 144.055C104.039 154.758 97.2422 162.648 88.4922 167.727C79.8203 172.805 69.7422 175.344 58.2578 175.344C46.7734 175.344 36.6172 172.805 27.7891 167.727C19.0391 162.648 12.2031 154.758 7.28125 144.055C2.4375 133.352 0.015625 119.523 0.015625 102.57V72.5703C0.015625 55.5391 2.4375 41.7109 7.28125 31.0859C12.125 20.4609 18.9219 12.6484 27.6719 7.64844C36.4219 2.57031 46.5391 0.03125 58.0234 0.03125C69.5078 0.03125 79.5859 2.57031 88.2578 7.64844C97.0078 12.6484 103.844 20.4609 108.766 31.0859C113.688 41.7109 116.148 55.5391 116.148 72.5703V102.57ZM80.6406 67.6484C80.6406 57.8828 79.7422 50.1875 77.9453 44.5625C76.1484 38.8594 73.5703 34.7969 70.2109 32.375C66.8516 29.875 62.7891 28.625 58.0234 28.625C53.2578 28.625 49.1563 29.875 45.7188 32.375C42.3594 34.7969 39.7812 38.8594 37.9844 44.5625C36.2656 50.1875 35.4062 57.8828 35.4062 67.6484V107.258C35.4062 117.102 36.3047 124.914 38.1016 130.695C39.8984 136.477 42.5156 140.617 45.9531 143.117C49.3906 145.617 53.4922 146.867 58.2578 146.867C63.0234 146.867 67.0469 145.617 70.3281 143.117C73.6875 140.617 76.2266 136.477 77.9453 130.695C79.7422 124.914 80.6406 117.102 80.6406 107.258V67.6484ZM221.969 173H186.578V44.2109L146.617 56.2812V27.6875L218.336 2.14062H221.969V173Z"
                    fill="white"
                  />
                </svg>
              )}
              {checked2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="50px"
                  viewBox="0 0 256 177"
                  fill="#fff"
                >
                  <path
                    d="M116.148 103.57C116.148 120.523 113.727 134.352 108.883 145.055C104.039 155.758 97.2422 163.648 88.4922 168.727C79.8203 173.805 69.7422 176.344 58.2578 176.344C46.7734 176.344 36.6172 173.805 27.7891 168.727C19.0391 163.648 12.2031 155.758 7.28125 145.055C2.4375 134.352 0.015625 120.523 0.015625 103.57V73.5703C0.015625 56.5391 2.4375 42.7109 7.28125 32.0859C12.125 21.4609 18.9219 13.6484 27.6719 8.64844C36.4219 3.57031 46.5391 1.03125 58.0234 1.03125C69.5078 1.03125 79.5859 3.57031 88.2578 8.64844C97.0078 13.6484 103.844 21.4609 108.766 32.0859C113.688 42.7109 116.148 56.5391 116.148 73.5703V103.57ZM80.6406 68.6484C80.6406 58.8828 79.7422 51.1875 77.9453 45.5625C76.1484 39.8594 73.5703 35.7969 70.2109 33.375C66.8516 30.875 62.7891 29.625 58.0234 29.625C53.2578 29.625 49.1563 30.875 45.7188 33.375C42.3594 35.7969 39.7812 39.8594 37.9844 45.5625C36.2656 51.1875 35.4062 58.8828 35.4062 68.6484V108.258C35.4062 118.102 36.3047 125.914 38.1016 131.695C39.8984 137.477 42.5156 141.617 45.9531 144.117C49.3906 146.617 53.4922 147.867 58.2578 147.867C63.0234 147.867 67.0469 146.617 70.3281 144.117C73.6875 141.617 76.2266 137.477 77.9453 131.695C79.7422 125.914 80.6406 118.102 80.6406 108.258V68.6484ZM255.953 174H138.414V149.859L193.492 91.2656C198.961 85.3281 203.258 80.1328 206.383 75.6797C209.586 71.1484 211.852 67.0469 213.18 63.375C214.508 59.7031 215.172 56.2656 215.172 53.0625C215.172 45.6406 213.336 39.8594 209.664 35.7188C206.07 31.5 200.875 29.3906 194.078 29.3906C189 29.3906 184.703 30.6406 181.188 33.1406C177.672 35.5625 174.977 38.8828 173.102 43.1016C171.305 47.2422 170.406 52.0078 170.406 57.3984H135.016C135.016 47.0859 137.438 37.6719 142.281 29.1562C147.125 20.5625 154 13.7266 162.906 8.64844C171.891 3.49219 182.516 0.914062 194.781 0.914062C212.984 0.914062 226.852 5.25 236.383 13.9219C245.914 22.5938 250.68 34.5078 250.68 49.6641C250.68 57.3984 249.117 64.7812 245.992 71.8125C242.867 78.8438 238.414 85.9141 232.633 93.0234C226.93 100.133 220.211 107.711 212.477 115.758L184.117 145.523H255.953V174Z"
                    fill="white"
                  />
                </svg>
              )}
              {checked3 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 254 177"
                  width="100px"
                  height="50px"
                  fill="#fff"
                >
                  <path
                    d="M116.148 103.57C116.148 120.523 113.727 134.352 108.883 145.055C104.039 155.758 97.2422 163.648 88.4922 168.727C79.8203 173.805 69.7422 176.344 58.2578 176.344C46.7734 176.344 36.6172 173.805 27.7891 168.727C19.0391 163.648 12.2031 155.758 7.28125 145.055C2.4375 134.352 0.015625 120.523 0.015625 103.57V73.5703C0.015625 56.5391 2.4375 42.7109 7.28125 32.0859C12.125 21.4609 18.9219 13.6484 27.6719 8.64844C36.4219 3.57031 46.5391 1.03125 58.0234 1.03125C69.5078 1.03125 79.5859 3.57031 88.2578 8.64844C97.0078 13.6484 103.844 21.4609 108.766 32.0859C113.688 42.7109 116.148 56.5391 116.148 73.5703V103.57ZM80.6406 68.6484C80.6406 58.8828 79.7422 51.1875 77.9453 45.5625C76.1484 39.8594 73.5703 35.7969 70.2109 33.375C66.8516 30.875 62.7891 29.625 58.0234 29.625C53.2578 29.625 49.1563 30.875 45.7188 33.375C42.3594 35.7969 39.7812 39.8594 37.9844 45.5625C36.2656 51.1875 35.4062 58.8828 35.4062 68.6484V108.258C35.4062 118.102 36.3047 125.914 38.1016 131.695C39.8984 137.477 42.5156 141.617 45.9531 144.117C49.3906 146.617 53.4922 147.867 58.2578 147.867C63.0234 147.867 67.0469 146.617 70.3281 144.117C73.6875 141.617 76.2266 137.477 77.9453 131.695C79.7422 125.914 80.6406 118.102 80.6406 108.258V68.6484ZM191.5 73.1016C196.969 73.1016 201.5 72.1641 205.094 70.2891C208.688 68.4141 211.344 65.7578 213.062 62.3203C214.859 58.8828 215.758 54.8594 215.758 50.25C215.758 46.2656 214.938 42.7109 213.297 39.5859C211.734 36.4609 209.312 34 206.031 32.2031C202.75 30.3281 198.609 29.3906 193.609 29.3906C189.781 29.3906 186.188 30.1328 182.828 31.6172C179.469 33.1016 176.773 35.2109 174.742 37.9453C172.711 40.6016 171.695 43.7656 171.695 47.4375H136.305C136.305 37.9844 138.844 29.7812 143.922 22.8281C149 15.875 155.797 10.4844 164.312 6.65625C172.906 2.82812 182.359 0.914062 192.672 0.914062C204.312 0.914062 214.508 2.78906 223.258 6.53906C232.086 10.2109 238.961 15.6797 243.883 22.9453C248.805 30.1328 251.266 39.0391 251.266 49.6641C251.266 55.2109 249.977 60.5234 247.398 65.6016C244.898 70.6797 241.305 75.2109 236.617 79.1953C231.93 83.1797 226.266 86.3438 219.625 88.6875C212.984 91.0312 205.523 92.2031 197.242 92.2031H173.219V73.1016H191.5ZM173.219 82.0078H197.242C206.539 82.0078 214.703 83.0625 221.734 85.1719C228.766 87.2031 234.664 90.1719 239.43 94.0781C244.195 97.9062 247.789 102.555 250.211 108.023C252.633 113.414 253.844 119.43 253.844 126.07C253.844 136.695 251.148 145.758 245.758 153.258C240.367 160.758 233.062 166.5 223.844 170.484C214.625 174.391 204.234 176.344 192.672 176.344C185.406 176.344 178.297 175.367 171.344 173.414C164.391 171.383 158.102 168.375 152.477 164.391C146.93 160.406 142.477 155.328 139.117 149.156C135.758 142.906 134.078 135.562 134.078 127.125H169.703C169.703 131.031 170.719 134.547 172.75 137.672C174.859 140.797 177.711 143.297 181.305 145.172C184.898 146.969 189 147.867 193.609 147.867C201.344 147.867 207.398 145.797 211.773 141.656C216.227 137.438 218.453 132.047 218.453 125.484C218.453 119.547 217.359 114.781 215.172 111.188C212.984 107.516 209.898 104.859 205.914 103.219C201.93 101.578 197.125 100.758 191.5 100.758H173.219V82.0078Z"
                    fill="white"
                  />
                </svg>
              )}
              {checked4 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="50px"
                  viewBox="0 0 259 176"
                  fill="#fff"
                >
                  <path
                    d="M116.148 102.57C116.148 119.523 113.727 133.352 108.883 144.055C104.039 154.758 97.2422 162.648 88.4922 167.727C79.8203 172.805 69.7422 175.344 58.2578 175.344C46.7734 175.344 36.6172 172.805 27.7891 167.727C19.0391 162.648 12.2031 154.758 7.28125 144.055C2.4375 133.352 0.015625 119.523 0.015625 102.57V72.5703C0.015625 55.5391 2.4375 41.7109 7.28125 31.0859C12.125 20.4609 18.9219 12.6484 27.6719 7.64844C36.4219 2.57031 46.5391 0.03125 58.0234 0.03125C69.5078 0.03125 79.5859 2.57031 88.2578 7.64844C97.0078 12.6484 103.844 20.4609 108.766 31.0859C113.688 41.7109 116.148 55.5391 116.148 72.5703V102.57ZM80.6406 67.6484C80.6406 57.8828 79.7422 50.1875 77.9453 44.5625C76.1484 38.8594 73.5703 34.7969 70.2109 32.375C66.8516 29.875 62.7891 28.625 58.0234 28.625C53.2578 28.625 49.1563 29.875 45.7188 32.375C42.3594 34.7969 39.7812 38.8594 37.9844 44.5625C36.2656 50.1875 35.4062 57.8828 35.4062 67.6484V107.258C35.4062 117.102 36.3047 124.914 38.1016 130.695C39.8984 136.477 42.5156 140.617 45.9531 143.117C49.3906 145.617 53.4922 146.867 58.2578 146.867C63.0234 146.867 67.0469 145.617 70.3281 143.117C73.6875 140.617 76.2266 136.477 77.9453 130.695C79.7422 124.914 80.6406 117.102 80.6406 107.258V67.6484ZM258.531 136.438H135.25L133.609 114.055L204.039 2.375H232.164L202.164 54.1719L168.414 107.961H258.531V136.438ZM239.664 173H204.391V2.375H239.664V173Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="layer" data-scene={1}>
            <h1 style={{ right: "100px" }} className="heading">
              We can help
              <br />
              to save
              <br />
              the oceans
            </h1>
          </div>
          <div className="layer" data-scene={2}>
            <h1 style={{ right: "100px" }} className="heading">
              Saving nature,
              <br />
              we save our
              <br />
              future
            </h1>
          </div>
          <div className="layer" data-scene={3}>
            <h1 style={{ right: "100px" }} className="heading">
              Only you
              <br />
              can prevent
              <br />
              ocean fires
            </h1>
          </div>
          <div className="layer" data-scene={4}>
            <h1 style={{ right: "100px" }} className="heading">
              Do not
              <br />
              litter on
              <br />
              the beach
            </h1>
          </div>
          <button className="button">How can I help?</button>
        </div>
        <div className="bottom_text"></div>
        <div className="left-content">
          <div className="layer" data-scene={1}>
            <div className="fact subtitle">
              By{" "}
              <span>
                <b>2050</b>
              </span>
              there will be more
            </div>
            <div className="fact number">
              plastic in the ocean than
              <span>
                <b>FISH</b>
              </span>
              <br />
              in the sea.
            </div>
            <div className="fact description">and is 10m deep</div>
          </div>
          <div className="layer" data-scene={2}>
            <div className="fact subtitle">More than</div>
            <div className="fact number">
              <span>1 000 000</span>
            </div>
            <div className="fact description">
              marine animals die every year due to plastic pollution and over
              <span>
                <b>700</b>
              </span>
              <br />
              <span>
                <b>species</b>
              </span>{" "}
              could go extinct due
              <br />
              to ocean pollution.
            </div>
          </div>
          <div className="layer" data-scene={3}>
            <div className="fact subtitle">GLOBALLY</div>
            <div className="fact number">
              <span>
                <b>GLOBALLY</b>
              </span>
              pieces of plastic
            </div>
            <div className="fact description">enter the oceans daily.</div>
          </div>
          <div className="layer" data-scene={4}>
            <div className="fact subtitle">
              There’s an{" "}
              <span>
                <b>ISLAND</b>
              </span>{" "}
              <small>
                <b>of trash</b>
              </small>
            </div>
            <div className="fact number">
              <span>1 600 0000 km2</span>
            </div>
            <div className="fact description">
              in the pacific ocean known as{" "}
              <b>
                the great
                <br />
                pacific garbage patch.
              </b>
            </div>
          </div>
        </div>
        <div className="right-content">
          <nav className="slide-nav">
            <div
              className="nav-button -prev"
              onClick={data > 0 ? () => setNumber(data - 1) : null}
            >
              &lt;
              {/* <label className="nav-toggle" htmlFor="scene-1">
                  1
                </label>
                <label className="nav-toggle" htmlFor="scene-2">
                  2
                </label>
                <label className="nav-toggle" htmlFor="scene-3">
                  3
                </label>
                <label className="nav-toggle" htmlFor="scene-4">
                  4
                </label> */}
            </div>
            <div
              className="nav-button -next"
              onClick={data < 3 ? () => setNumber(data + 1) : null}
            >
              Next &gt;
              {/* {/* <label className="nav-toggle" htmlFor="scene-1">
                  1
                </label> */}
              <label className="nav-toggle" htmlFor="scene-2">
                2
              </label>
              <label className="nav-toggle" htmlFor="scene-3">
                3
              </label>
              <label className="nav-toggle" htmlFor="scene-4">
                4
              </label>
            </div>
            <div className="nav-button content">
              <div className="layer" data-scene={1}>
                <p className="heading">A GLOBAL CRISIS</p>
              </div>
              <div className="layer" data-scene={2}>
                <p className="heading">OUR MISSION</p>
              </div>
              <div className="layer" data-scene={3}>
                <p className="heading">ITS TIME TO GIVE </p>
              </div>
              <div className="layer" data-scene={4}>
                <p className="heading">ITS TIME TO GIVE </p>
              </div>
            </div>
          </nav>
          <div className="layer" data-scene={1}>
            <h2 className="heading">
              Its not late. Its time to save the ocean.
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              accusantium est autem amet minus, atque consequatur iure dolor id
              inventore sit magnam sint, voluptates deserunt beatae? Error
              eveniet quam dicta!
              <br />
              <br />
              <br />
              <span>
                <a className="link">
                  <b>
                    LEARN MORE{" "}
                    <MdOutlineKeyboardArrowRight color="#B5D7E2" size={30} />
                  </b>
                </a>
              </span>
            </p>
          </div>
          <div className="layer" data-scene={2}>
            <h2 className="heading">Facts and Stats on Ocean Pollution</h2>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, amet hic provident ipsa placeat ad. Excepturi
              distinctio consectetur voluptatibus rem deleniti ducimus officia
              natus, magnam aut architecto sint reprehenderit provident?
              <br />
              <br />
              <br />
              <span>
                <a className="link">
                  <b>
                    LEARN MORE{" "}
                    <MdOutlineKeyboardArrowRight color="#B5D7E2" size={30} />
                  </b>
                </a>
              </span>
            </p>
          </div>
          <div className="layer" data-scene={3}>
            <h2 className="heading">Learn more about how you can help.</h2>
            <p className="paragraph">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, amet hic provident ipsa placeat ad. Excepturi
              distinctio consectetur voluptatibus rem deleniti ducimus officia
              natus, magnam aut architecto sint reprehenderit provident?
              <br />
              <br />
              <br />
              <span>
                <a className="link">
                  <b>
                    LEARN MORE{" "}
                    <MdOutlineKeyboardArrowRight color="#B5D7E2" size={30} />
                  </b>
                </a>
              </span>
            </p>
          </div>
          <div className="layer" data-scene={4}>
            <h2 className="heading">Join the fight to defend our oceans.</h2>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              temporibus explicabo aspernatur dignissimos veritatis. Voluptate
              quis quia sed totam quasi placeat, odio quam fuga consectetur
              voluptatibus praesentium tempore vel molestiae?
              <br />
              <br />
              <br />
              <span>
                <a className="link">
                  <b>
                    LEARN MORE{" "}
                    <MdOutlineKeyboardArrowRight color="#B5D7E2" size={30} />
                  </b>
                </a>
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
