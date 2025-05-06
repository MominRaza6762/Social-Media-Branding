import React from "react";
import "../CreateYourChannelHero/CreateYourChannelHero.css";
import { Link } from "react-router-dom";
import channel1 from "../../../assests/channel1.webp";
import channel2 from "../../../assests/channel2.webp";
import channel3 from "../../../assests/channel3.webp";
import OurDevelopment from "../OurDevelopment/OurDevelopment.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Button from "../../BrandingComponents/Button/Button.jsx";

const CreateYourChannelHero = () => {
  return (
    <div className="CreateYourChannelHero">
      <Link to="/" className="CreateYourChannelHeroHeading">
        <h2>FEYABLANCHE</h2>
        <p>TOP-LEVEL BRANDER CREATOR</p>
      </Link>
      <div className="CreateYourChannelHeroImg">
        <img src={channel1} alt="" />
        <img src={channel2} alt="" />
        <img src={channel3} alt="" />
      </div>
      <div className="CreateYourChannelHeroContents" style={{
          paddingBottom:"10px",
      }}>
        <h3 style={{
          fontSize:"18px",
          letterSpacing:"2px",
          margin:"10px 0 0 0",
        }}>Signature</h3>
        <h2 style={{
          fontSize:"40px",
          fontWeight:"bold",
          letterSpacing:"3px",
          margin:"5px 0 20px 0"
        }}>CREATING YOUR OWN CHANEL</h2>
        <p style={{
          letterSpacing:'1px',
          fontSize:'16px',
          margin:"20px 0"

        }}>Monetize your Instagram - get your product idea, Brand Book <br /> and step-by-step plan for launching your successful sales on <br /> Instagram!</p>
        <p style={{
          letterSpacing:'1px',
          fontSize:"14px",
          color:"#767270",
          fontWeight:"bold",
        }}>With help of Feyablanche's Signature Method, we will create your <br /> Product in 5 simple steps.</p>
      <Button  title="Get a Free Consultation"/>
      </div>
      <OurDevelopment />
      <Reviews />
    </div>
  );
};

export default CreateYourChannelHero;
