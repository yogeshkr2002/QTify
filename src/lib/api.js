import axios from "axios";
export const api = axios.create({baseURL:"https://qtify-backend.labs.crio.do",timeout:10000});
export async function getJSON(path){const { data } = await api.get(path);return data;}
