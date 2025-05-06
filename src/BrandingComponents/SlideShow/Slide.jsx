import React from "react";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "./SlideShow.css";
import 'react-slideshow-image/dist/styles.css'
import h1 from "../../../assests/h1.jpg";
import h2 from "../../../assests/h2.jpg";
import h3 from "../../../assests/h3.jpg";
import h4 from "../../../assests/h4.jpg";
import h5 from "../../../assests/h5.jpg";
import h6 from "../../../assests/h6.jpg";
import h7 from "../../../assests/h7.jpg";
import { useInView } from "react-intersection-observer";


const slideImages = [
  {
    img: h1,
    caption: "Slide 1",
  },
  {
    img: h2,
    caption: "Slide 2",
  },
  {
    img: h3,
    caption: "Slide 3",
  },
  {
    img: h4,
    caption: "Slide 4",
  },
  {
    img: h5,
    caption: "Slide 5",
  },
  {
    img: h6,
    caption: "Slide 6",
  },
  {
    img: h7,
    caption: "Slide 7",
  },
];

const ImageSlideShow = () => {
    const [slideShowRef, slideShowRefInView] = useInView({
        triggerOnce: true,
        threshold: 0.1, 
      });
  return (
    <div ref={slideShowRef} className={`slide-container ${slideShowRefInView ? "slide-container-visible" : ""}`}>
      <Zoom
        scale={0.4}
        duration={5000}
        arrows={true}
        indicators={false}
        autoplay={true}
        dots = {true}
        
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img className="slideShowImage"
              src={slideImage.img}
              alt=""
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ImageSlideShow;
