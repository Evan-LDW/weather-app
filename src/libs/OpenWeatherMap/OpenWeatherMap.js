import axios from "axios";

const OpenWeatherMap = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    units: "metric",
    appid: "2466213f21b4b723d341e00a430a7673",
  },
});

export default OpenWeatherMap;
