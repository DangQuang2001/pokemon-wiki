import React from "react";
import "./Infopoke.scss";

const Infopoke: React.FC = () => {
  return (
    <div className="infopoke">
      <div className="info__image">
        <img
          src="http://play.pokemonshowdown.com/sprites/xyani/abomasnow-f.gif"
          alt=""
          className="image"
        />
        <div className="sex">
          <i className="fa-solid fa-mars active"></i>
          <i className="fa-solid fa-venus"></i>
        </div>
      </div>
    </div>
  );
};

export default Infopoke;
