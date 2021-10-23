import Api from "./api"

const endpoint = "pokemon/";

const getPokemons = ({limit = 25, offset = 0}) => Api.get(endpoint + `?limit=${limit}&offset=${offset}`);
const getPokemon = (name) => Api.get(endpoint + name)

export default {
    getPokemons,
    getPokemon
}