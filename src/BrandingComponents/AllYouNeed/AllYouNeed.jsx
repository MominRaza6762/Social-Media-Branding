import React from "react";
import "./AllYouNeed.css";
import AllYouNeedContent from "./AllYouNeedContent";
import h5 from "../../../assests/h5.jpg";
import h6 from "../../../assests/h6.jpg";
import h7 from "../../../assests/h7.jpg";
import "animate.css";
import { useInView } from "react-intersection-observer";

const AllYouNeed = () => {
  const [heading, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="allYouNeed">
      <div className="allYouNeedContainer">
        <h2 ref={heading} className={`allYouNeed_title ${ headingInView ? "allYouNeed_title-visible" : ""}`}>
          ALL YOU WANTED TO KNOW (INCLUDING PRICES)
        </h2>
        <AllYouNeedContent
          title="The Bold Moves"
          desc="A transformational project-service, in which within 2 months you get
          an ideologically strong Personal Brand, aesthetically gorgeous
          Instagram Page and Powerful Product from a scratch."
          img={h5}
        />
        <AllYouNeedContent
          title="Creating Your Own Channel"
          desc="Legendary 5-stage service where we create your signature Product,
          Service or Project from the scratch. Powerful positioning, clear
          structure and wonderful design"
          img={h6}
        />
        <AllYouNeedContent
          title="Brand Road Map"
          desc="If you already have Personal Brand and product(s) but stull feel it's not being organized in a high class- this is the only right place to start!"
          img={h7}
        />
      </div>
    </div>
  );
};

export default AllYouNeed;
