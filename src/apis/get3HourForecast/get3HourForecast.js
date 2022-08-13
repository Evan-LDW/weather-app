import OpenWeatherMap from "../../libs/OpenWeatherMap";

const get3HourForecast = (id) =>
  OpenWeatherMap.get("/forecast", {
    params: {
      id,
    },
  });

export default get3HourForecast;
