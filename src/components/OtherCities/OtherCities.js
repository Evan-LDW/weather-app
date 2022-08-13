import { useEffect, useState } from "react";
import getWeathers from "../../apis/getWeathers/getWeathers";
import useTimer from "../../utils/useTimer/useTImer/useTImer";
import Section from "../Section";
import CityWeather from "./components/CityWeather";

const OtherCities = ({ currentCityId, setCurrentCityId }) => {
  const [data, setData] = useState();
  const [loading, timer, setLoading] = useTimer();

  useEffect(() => {
    setLoading(true);
    console.log(currentCityId);

    const otherCitiesId = [2158177, 2147714, 2174003, 2063523].filter(
      (id) => id !== currentCityId
    );

    getWeathers(otherCitiesId).then((res) => {
      setData(res.data);
      timer();
    });
    return () => clearTimeout(timer);
  }, [currentCityId, timer, setLoading]);

  if (loading) {
    return <></>;
  }

  return (
    <Section title="Other cities">
      {data.list.map(({ id, name, main: { temp }, weather: [weather] }) => {
        return (
          <CityWeather
            key={id}
            id={id}
            onClick={() => {
              setCurrentCityId(id);
            }}
            name={name}
            temperature={temp}
            weather={weather}
          />
        );
      })}
    </Section>
  );
};

export default OtherCities;
