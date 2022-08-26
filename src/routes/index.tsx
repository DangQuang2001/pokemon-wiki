import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import GCC from "../pages/GCC";
import News from "../pages/News";
import TVPokemon from "../pages/TVPokemon";
import Videogames from "../pages/Videogames";
import PlayPokemon from "../pages/PLayPokemon";
import Pokedex from "../pages/Pokedex/Pokedex";

const RouterPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/news" element={<News />} />
      <Route path="/tvpokemon" element={<TVPokemon />} />
      <Route path="/videogames" element={<Videogames />} />
      <Route path="/gccpokemon" element={<GCC />} />
      <Route path="/playpokemon" element={<PlayPokemon />} />
    </Routes>
  );
};

export default RouterPage;
