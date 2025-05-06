import React from "react";
import "./ChooseRequest.css";
import RequestContent from "./RequestContent";
import h1 from "../../../assests/h1.jpg";
import h2 from "../../../assests/h2.jpg";
import h3 from "../../../assests/h3.jpg";
import h4 from "../../../assests/h4.jpg";
import { useInView } from "react-intersection-observer";

const ChooseRequest = () => {
  const [homeContents, homeContentsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={homeContents}
      className={`chooseRequest ${ homeContentsInView ? "chooseRequest-visible" : ""
      }`}>
      <div className="chooseRequestContent">
        <RequestContent
          title="Gorgeous Instagram"
          desc="with a powerful positioning, philosophy, personal brand attributes,signature style"
          img={h1}
        />
        <RequestContent
          title="INSTAGRAM & PRODUCT"
          desc="First, we make your IG Page aesthetically gorgeous and then we decide WHAT, HOW, and TO WHOM to sell your new product, service or project"
          img={h2}
        />
        <RequestContent
          title="Your Brand Road Map"
          desc="for those who are lost with all their ideas, plans, projects, and timelines. Together we create a strategy, step-by-step plan, and required documentation."
          img={h3}
        />
        <RequestContent
          title="Powerful Product Only"
          desc="If you already have beautiful and strong page on Instagram and you want to rebrand or create your product | service | project to monetize your blog"
          img={h4}
        />
      </div>
    </div>
  );
};

export default ChooseRequest;
