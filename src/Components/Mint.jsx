import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function Mint() {
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

  return (
    <div className="mint" id="mint" >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>
              <span>INVEST IN</span>
              <br />
              <span>SUSTAINABLE</span>
              <br />
              <span>PROJECTS THAT CARE</span>
            </h1>
            <div className="mint_container">
              <button className="btn">MINT</button>
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
