import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

export default function Doner() {
  // ScrollReveal().reveal('.h1', { delay: 500 });

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const options = {
      root: document.getElementById("container"),
      rootMargin: "0",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 1000);
        } else {
          setIsVisible(false);
        }
      }, options);
    });
    const hiddenText = document.querySelectorAll("div.mint");
    hiddenText.forEach((el) => observer.observe(el));
  });
  useEffect(() => {
    AOS.init({
      duration: 1500,
      startEvent: "DOMContentLoaded",
    });
  });
  return (
    <div className="mint donate" id="donate">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="h1">
              DONATE IN
              <br />
              SUSTAINABLE
              <br />
              PROJECTS THAT CARE
            </h1>
            <div className="mint_container">
              <button className="btn">Donate</button>
              <p className="mint_text">
                We at the Frosty Narwhals care about the environment. From
                monthly donations, to beach clean ups, the Frosty Narwhals
                strive to make putting the world at the top of our priority
                list.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
