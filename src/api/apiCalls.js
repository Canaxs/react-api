import axios from "axios";

export const getBody = (page=0) => {
    return axios.get("https://rickandmortyapi.com/api/character?page="+page);
};