import React from "react";
import "./Button.css";
import { useInView } from "react-intersection-observer";


const Button = ({title}) => {
    const [buttonRef, buttonInView] = useInView({
        triggerOnce: true,
        threshold: 0.1, 
      });
  return (
    <div ref={buttonRef} className={`wrapper ${buttonInView ? "button-visible" : ""}`}>
      <a href="#" className="homeGetConsultant">
        <span>{title}</span>
      </a>
    </div>
  );
};

export default Button;
