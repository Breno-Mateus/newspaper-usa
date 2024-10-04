import axios from "axios";

export const data = () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2e0ddf5bee2546f7ac806bdf6b22d579`)
}