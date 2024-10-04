import axios from "axios";

export const data = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
}