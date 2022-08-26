import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menubar.scss";

const Menubar: React.FC = () => {
  const [path, setpath] = useState(window.location.pathname);
  return (
    <div className="menubar">
      <div className="menubar__items">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "item active" : "item")}
          onClick={() => {
            setpath("/");
          }}
        >
          <div className="icon">
            {path == "/" ? (
              <img
                className="image"
                src={require("./pokemon-trainer (1).png")}
                alt=""
              />
            ) : (
              <img
                className="image"
                src={require("./pokemon-trainer.png")}
                alt=""
              />
            )}
          </div>
          <div className="menuname">Home</div>
        </NavLink>
        <NavLink
          to="/pokedex"
          className={({ isActive }) => (isActive ? "item active" : "item")}
          onClick={() => {
            setpath("/pokedex");
          }}
        >
          <div className="icon">
            {path == "/pokedex" ? (
              <img className="image" src={require("./pokeball1.png")} alt="" />
            ) : (
              <img className="image" src={require("./pokeball.png")} alt="" />
            )}
          </div>
          <div className="menuname">Pokedex</div>
        </NavLink>
        <NavLink
          to="/videogames"
          className={({ isActive }) => (isActive ? "item active" : "item")}
          onClick={() => {
            setpath("/videogames");
          }}
        >
          <div className="icon">
            {path == "/videogames" ? (
              <img className="image" src={require("./pokemon-go.png")} alt="" />
            ) : (
              <img
                className="image"
                src={require("./pokemon-go (1).png")}
                alt=""
              />
            )}
          </div>
          <div className="menuname">Videogames</div>
        </NavLink>
        <NavLink
          to="gccpokemon"
          className={({ isActive }) => (isActive ? "item active" : "item")}
          onClick={() => {
            setpath("/gccpokemon");
          }}
        >
          <div className="icon">
            {path == "/gccpokemon" ? (
              <img
                className="image"
                src={require("./pokemon (1).png")}
                alt=""
              />
            ) : (
              <img className="image" src={require("./pokemon.png")} alt="" />
            )}
          </div>
          <div className="menuname">GCC Pokemon</div>
        </NavLink>
        <NavLink
          to="tvpokemon"
          className={({ isActive }) => (isActive ? "item active" : "item")}
          onClick={() => {
            setpath("/tvpokemon");
          }}
        >
          <div className="icon">
            {path == "/tvpokemon" ? (
              <img className="image" src={require("./avatar (1).png")} alt="" />
            ) : (
              <img className="image" src={require("./avatar.png")} alt="" />
            )}
          </div>
          <div className="menuname">TV Pokemon</div>
        </NavLink>
        <NavLink
          to="playpokemon"
          className={({ isActive }) => (isActive ? "item active" : "item")}
          onClick={() => {
            setpath("/playpokemon");
          }}
        >
          <div className="icon">
            {path == "/playpokemon" ? (
              <img className="image" src={require("./gaming (1).png")} alt="" />
            ) : (
              <img className="image" src={require("./gaming.png")} alt="" />
            )}
          </div>
          <div className="menuname">Play! Pokemon</div>
        </NavLink>
        <NavLink
          to="news"
          className={({ isActive }) => (isActive ? "item active" : "item")}
          onClick={() => {
            setpath("/news");
          }}
        >
          <div className="icon">
            {path == "/news" ? (
              <img className="image" src={require("./online (1).png")} alt="" />
            ) : (
              <img className="image" src={require("./online.png")} alt="" />
            )}
          </div>
          <div className="menuname">News</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Menubar;
