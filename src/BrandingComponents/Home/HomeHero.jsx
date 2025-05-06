import React from "react";
import Button from "../Button/Button";
import "./Home.css";
import { useInView } from "react-intersection-observer";
import homePageVideo from "../../../assests/homePageVideo.mp4"

import "animate.css";

const HomeHero = () => {
  const [homeContents, homeContentsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="heroContainer">
      <div className="homeHeroVideoCotainer">
        <video autoPlay loop muted className="homeHeroVideo">
          <source src={homePageVideo} type="video/mp4" />
        </video>
      </div>
      <div className="heroTop">
        <h1>ONORA Design STUDIO</h1>
        <p>BRANDING · CONTENT CREATION · ONLINE PROJECTS LAUNCHER</p>
      </div>

      <div ref={homeContents}
        className={`homeContents ${ homeContentsInView ? "homeContents-visible" : ""}`}>
        <span>
          Transform Your Identity into <h2>a Legendary Brand</h2>
        </span>
        <p className="specailP">
          Gorgeous Instagram, Powerful Personal Brand, and Legendary Product -
          Onora is your all-in-one solution for monetizing your IG and
          becoming a role model for the whole market.
          Everything we create for you inevitably becomes aesthetically gorgeous
          and ideologically strong!
        </p>
        <span>
          <p
            style={{
              backgroundColor: "#c39d42",
              color: "black",
              marginBottom: "10px",
            }}
          >
            Get your Free Consultation Session with Onora
          </p>
          Start your journey to success now!
        </span>
        <br />
        <Button title="Get a Free Consultation" />
      </div>
    </div>
  );
};

export default HomeHero;
