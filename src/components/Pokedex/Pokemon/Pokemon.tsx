import axios, { Axios, AxiosResponse } from "axios";
import { url } from "inspector";
import React, { useEffect, useState } from "react";
import { getinfopokemon, getpokemon } from "../../../api";
import "./Pokemon.scss";

const Pokemon: React.FC = () => {
  interface Pokemon {
    name: string;
    url: string;
  }
  const [pokemon, setpokemon] = useState([]);
  const [infopokemon, setinfopokemon] = useState<any[]>([]);
  const [number, setnumber] = useState(21);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    (async () => {
      const pokemon1 = await getpokemon(number);
      setpokemon(pokemon1);
      setloading(true);
    })();
  }, [number]);
  useEffect(() => {
    pokemon.map(async (item: Pokemon) => {
      const result = await axios.get(item.url);

      setinfopokemon((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  }, [loading]);

  console.log(infopokemon);

  return (
    <div className="items__pokemon">
      <div className="item">
        <img
          className="pokemon__image"
          src="http://play.pokemonshowdown.com/sprites/xyani/charizard-gmax.gif"
          alt=""
        />
        <div className="info__pokemon">
          <span className="stt">1</span>
          <span className="namepokemon">Charizard gma</span>
          <div className="generation">
            <div className="generation__items flying">flying</div>
          </div>
        </div>
      </div>
      <div className="item">
        <img
          className="pokemon__image"
          src="http://play.pokemonshowdown.com/sprites/xyani/charizard-megax.gif"
          alt=""
        />
        <div className="info__pokemon">
          <span className="stt">1</span>
          <span className="namepokemon">Charizard gmax</span>
          <div className="generation">
            <div className="generation__items flying">flying</div>
          </div>
        </div>
      </div>
      <div className="item">
        <img
          className="pokemon__image"
          src="http://play.pokemonshowdown.com/sprites/xyani/charizard-megay.gif"
          alt=""
        />
        <div className="info__pokemon">
          <span className="stt">1</span>
          <span className="namepokemon">Charizard gmax</span>
          <div className="generation">
            <div className="generation__items flying">flying</div>
          </div>
        </div>
      </div>
      {infopokemon.map((items, index) => {
        return (
          <div key={index} className="item">
            <img
              className="pokemon__image"
              src={`http://play.pokemonshowdown.com/sprites/xyani/${items.name}.gif`}
              alt=""
            />
            <div className="info__pokemon">
              <span className="stt">Poke {index + 1}</span>
              <span className="namepokemon">{items.name}</span>
              <div className="generation">
                {items.types.map(
                  (item: any, index: React.Key | null | undefined) => {
                    return (
                      <div
                        key={index}
                        className={`generation__items ${item.type.name}`}
                      >
                        {item.type.name}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;
