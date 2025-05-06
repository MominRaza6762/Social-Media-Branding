import React from "react";
import "./AllYouNeed.css";
import Button from "../Button/Button";
import { useInView } from "react-intersection-observer";

const AllYouNeedContent = ({ title, desc, img }) => {
  const [allYouNeedContent, allYouNeedContentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={allYouNeedContent} className={`allYouNeedContentContainer ${
        allYouNeedContentInView ? "allYouNeedContentContainer-visible" : ""}`}>
      <div className="allYouNeedContentWrapper">
        <section className="allYouNeedContentContainerLeft">
          <h1>{title}</h1>
          <p>{desc}</p>
          <Button title="Discover" />
        </section>
        <section className="allYouNeedContentContainerRight">
          <img src={img} alt="" />
        </section>
      </div>
    </div>
  );
};

export default AllYouNeedContent;
