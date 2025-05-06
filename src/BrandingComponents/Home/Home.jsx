import React from "react";
import "./Home.css";
import "animate.css";
import AllYouNeed from "../AllYouNeed/AllYouNeed";
import ChooseRequest from "../ChooseRequest/ChooseRequest";
import SlideShow from "../SlideShow/SlideShow";
import HomeHero from "./HomeHero"
export const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <AllYouNeed />
      <ChooseRequest />
      <SlideShow />
    </div>
  );
};
