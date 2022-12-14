import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
import VideoNike from "./HomePageImg/VideoNike.mp4";

const HomePage = () => {
  return (
    <>
      <p>
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/30afe174-1232-4fa5-8bd2-c8d5c4140ea7/nike-just-do-it.jpg"
          alt="# "
        />
      </p>
      <h1> GIFTS FOR THE FAM</h1>
      <p>
        Everything to give all those Energy Matchers, Rule Breakers, and more.
      </p>
      <button class="button-89" role="button">
        <NavLink to="/list">SHOP</NavLink>
      </button>
      <h2>Nike Fleece</h2>
      <p>
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/abdc6ff0-7743-4d16-8022-b006b5b5cd2e/nike-just-do-it.jpg"
          alt="# "
        />
      </p>
      <h1> NEW FLEECE SETS FTW</h1>
      <p>
        Innovative Tech Fleece and versatile Phoenix Fleece matching sets
        <br />
        can be mixed and matched for a look as iconic as you.
      </p>
      <button class="button-89" role="button">
        <NavLink to="/list">SHOP ALL FLEECE</NavLink>
      </button>
      <video
        src={VideoNike}
        autoPlay={true}
        width="100%"
        // controls="controls"
        muted="true"></video>
    </>
  );
};

export default HomePage;
