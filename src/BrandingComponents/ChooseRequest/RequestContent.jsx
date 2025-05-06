import React from "react";
import Button from "../Button/Button";
import "./ChooseRequest.css";

const RequestContent = ({title,desc,img}) => {
  return (
    <div className="requestConentMainContainer">
      <div className="requestConentMainInnerContainer">
        <div className="requestConentMainInnerContainerContents">
          <h1>{title}</h1>
          <p>
            {desc}
          </p>
          <Button title="Discover" />
        </div>
        <img src={img} alt="" className="chooseRequestImage" />
      </div>
    </div>
  );
};

export default RequestContent;
