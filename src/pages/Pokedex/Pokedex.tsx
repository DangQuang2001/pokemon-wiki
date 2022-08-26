import React from "react";
import "./Pokedex.scss";
import Pokemon from "../../components/Pokedex/Pokemon/Pokemon";
import Infopoke from "../../components/Infopoke/Infopoke";

const Pokedex: React.FC = () => {
  return (
    <div className="main">
      <div className="main__left">
        <div className="searchpokemon">
          <div className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search pokemon"
            ></input>
            <img
              className="search__image"
              src={require("./pokeball (2).png")}
              alt=""
            />
          </div>
        </div>
        <div className="total">
          <div className="total__ascending">
            <select className="choose" name="choose" id="choose">
              <option value="acsending">Acsending</option>
              <option value="decrease">Decrease</option>
            </select>
          </div>
          <div className="pokemon__number">
            <span className="font">from</span>
            <input className="number" type="number" />
            <span className="font">to</span>
            <input className="number" type="number" />
          </div>
        </div>
        <div className="category">
          <div className="category__same category__type">
            <i className="fa-solid fa-circle-o"></i>
            <select className="choose" name="choose" id="choose">
              <option value="acsending">Type</option>
            </select>
          </div>
          <div className="category__same category__weak">
            <i className="fa-solid fa-lightbulb"></i>
            <select className="choose" name="choose" id="choose">
              <option value="acsending">Weaknesses</option>
            </select>
          </div>
          <div className="category__same category__ability">
            <i className="fa-solid fa-cloud-bolt"></i>
            <select className="choose" name="choose" id="choose">
              <option value="acsending">Ability</option>
            </select>
          </div>
          <div className="category__same category__height">
            <i className="fa-solid fa-egg"></i>
            <select className="choose" name="choose" id="choose">
              <option value="acsending">Height</option>
            </select>
          </div>
          <div className="category__same category__weight">
            <i className="fa-solid fa-weight-hanging"></i>
            <select className="choose" name="choose" id="choose">
              <option value="acsending">Weight</option>
            </select>
          </div>
          <div className="category__reload">
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </div>
        </div>
        <Pokemon />
      </div>
      <div className="main__right">
        <Infopoke />
      </div>
    </div>
  );
};

export default Pokedex;
