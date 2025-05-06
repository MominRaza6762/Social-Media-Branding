import React from "react";
import "./SlideShow.css";
import ImageSlideShow from "./Slide";
import { useInView } from "react-intersection-observer";

const SlideShow = () => {
  const [SlideShowText, SlideShowTextInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="slideShow">
      <div className="slideShow_Container">
        <div
          ref={SlideShowText}
          className={`slideShow_heading ${
            SlideShowTextInView ? "slideShow_heading-visible" : ""
          }`}
        >
          <h2>
            YOUR REALITY ON INSTAGRAM <br /> AFTER OUR COOPERATION
          </h2>
        </div>
        <div
          ref={SlideShowText}
          className={`slideShow_Sub_heading ${
            SlideShowTextInView ? "slideShow_Sub_heading-visible" : ""
          }`}
        >
          <p>
            a clear understanding of yourself, <br /> a step-by-step plan (what
            and when to post, how to behave <br /> and what to talk about),
            strong positioning, your brand's <br /> ideology and incredibly
            beautiful photo and video content
          </p>
        </div>
        <ImageSlideShow />
      </div>
    </div>
  );
};

export default SlideShow;
