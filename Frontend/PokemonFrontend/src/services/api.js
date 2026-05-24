import axios from "axios";

const BASE_URL = "http://localhost:8080/api/pokemon";

export const getPokemon = async (name) => {
  const response = await axios.get(`${BASE_URL}/${name}`);
  return response.data;
};