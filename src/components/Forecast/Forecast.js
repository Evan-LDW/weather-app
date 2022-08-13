import Section from "../Section";
import { getDay } from "date-fns";
import DailyWeather from "./components/DailyWeather";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import get3HourForecast from "../../apis/get3HourForecast";
import useTimer from "../../utils/useTimer/useTImer/useTImer";

const Layout = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Forecast = ({ cityId }) => {
  const [data, setData] = useState();
  const [loading, timer, setLoading] = useTimer();

  useEffect(() => {
    setLoading(true);
    get3HourForecast(cityId).then(({ data }) => {
      setData(data);
      timer();
    });
    return () => clearTimeout(timer);
  }, [cityId, timer, setLoading]);

  if (loading) {
    return <></>;
  }

  const forecast = data.list.filter(({ dt_txt }) => dt_txt.endsWith("0:00:00"));

  return (
    <Section title="Forecast">
      <Layout>
        {forecast.map(({ dt, dt_txt, main: { temp }, weather: [weather] }) => {
          return (
            <DailyWeather
              key={dt}
              day={DAYS[getDay(new Date(dt * 1000))]}
              temperature={temp}
              weather={weather}
            />
          );
        })}
      </Layout>
    </Section>
  );
};

export default Forecast;
