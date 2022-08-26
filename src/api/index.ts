import axios from "../utils/axios";

const getpokemon = async (number:number) => {
    try {
      const data = await axios.get<any, any>(`https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=0`)
      return data
    } catch(err) {
      console.log(err)
    }
  }
  const getinfopokemon = async (url:string) => {
    try {
      const data = await axios.get<any, any>(`${url}`)
      return data
    } catch(err) {
      console.log(err)
    }
  }

export {getpokemon,getinfopokemon}