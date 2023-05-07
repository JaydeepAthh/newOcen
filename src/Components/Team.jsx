import React, { useRef, useEffect, useState } from "react";
import member1 from "../assets/public/member1.webp";
import member2 from "../assets/public/member2.webp";
import member3 from "../assets/public/member3.webp";
import member4 from "../assets/public/member4.webp";
import member5 from "../assets/public/member5.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";

export default function Team() {
  const sliderRef = useRef();

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ref: sliderRef,
  };

  return (
    <div className="team" id="shop">
      <Slider {...settings}>
        <div>
          <div className="team_details">
            <div className="details">
              <h1>THE TEAM</h1>
              <p>
                Founded in 2021 by BeardedBro, the Frosty Narwhals set out to
                create a refi focused nft project with the goal of cleaning up
                the oceans.
                <br />
                With ocean pollution at an all time high and increasing, the
                problem needs a two fold approach, stopping the delivery of
                pollutants to the ocean, and saving the ocean by cleaning up the
                existing pollutants.
                <br />
                An artist was found and the Frosty Narwhals were created. Now
                the rest is history. Join us as we become a positive voice for
                the ocean in the sea of web3.
              </p>
            </div>
            <div>
              <h1 className="number">01</h1>
              <img className="img" src={member1} alt="member1" />
            </div>
          </div>
        </div>
        <div>
          <div className="team_details">
            <div className="details">
              <h1>THE TEAM</h1>
              <p>
                Beardedbro, Founder, is a member of the US Navy. During
                training, he came to realize just how substantial the ocean
                pollution problem really is. Instead of letting someone else
                handle the problem, BeardedBro wanted to tackle the problem head
                on and be part of the solution, not the problem. So he set out
                to create a web3 project with real world impact. Using the
                blockchain for its transparency, the goal was to make a project
                that made a direct impact.
                <br />
                An artist was found and the Frosty Narwhals were created. Now
                the rest is history. Join us as we become a positive voice for
                the ocean in the sea of web3.
              </p>
            </div>
            <div>
              <h1 className="number">02</h1>
              <img className="img" src={member2} alt="member2" />
            </div>
          </div>
        </div>
        <div>
          <div className="team_details">
            <div className="details">
              <h1>THE TEAM</h1>
              <p>
                The Frosty Narwhals artist DG was chosen after months of
                talking, discussing, and planning. After being given the green
                light, DG created the first Frosty Narwhal. Shortly thereafter
                the first handheld assets were made. Each Narwhal is unique,
                created entirely using hand drawn assets created by DG.
              </p>
            </div>
            <div>
              <h1 className="number">04</h1>
              <img className="img" src={member3} alt="member3" />
            </div>
          </div>
        </div>
        <div>
          <div className="team_details">
            <div className="details">
              <h1>THE TEAM</h1>
              <p>
                Brew, the newest Team Member at Frosty Narwhals! Product
                Designer by day and NFT enthusiasts by night! Everyday is a new
                day to learn more about ocean preservation! When he’s not out
                picking up trash to help Frosty save the world, he’s brewing up
                some killer brews to enjoy with friends, hence the name!
              </p>
            </div>
            <div>
              <h1 className="number">05</h1>
              <img className="img" src={member4} alt="member4" />
            </div>
          </div>
        </div>
        <div>
          <div className="team_details">
            <div className="details">
              <h1>THE TEAM</h1>
              <p>
                Brew, the newest Team Member at Frosty Narwhals! Product
                Designer by day and NFT enthusiasts by night! Everyday is a new
                day to learn more about ocean preservation! When he’s not out
                picking up trash to help Frosty save the world, he’s brewing up
                some killer brews to enjoy with friends, hence the name!
              </p>
            </div>
            <div>
              <h1 className="number">06</h1>
              <img className="img" src={member5} alt="member5" />
            </div>
          </div>
        </div>
      </Slider>
      <nav className="slide-nav theteam">
        <div className="nav-button -prev" onClick={previousSlide}>
          &lt;
        </div>
        <div className="nav-button -next" onClick={nextSlide}>
          Next &gt;
        </div>
      </nav>
    </div>
  );
}
