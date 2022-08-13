import BackgroundImage from "../BackgroundImage";
import styled from "styled-components";
import Weather from "./Weather";
import CityName from "./CityName";
import { useEffect, useState } from "react";
import getWeather from "../../apis/getWeather";
import Loading from "../../Loading/Loading";
import useTimer from "../../utils/useTimer/useTImer/useTImer";

const Layout = styled.div`
  display: flex;
  color: white;
  padding: 64px 96px;
  justify-content: space-between;
`;

const Wrapper = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocalWeather = ({ cityId }) => {
  const [data, setData] = useState();
  const [loading, timer, setLoading] = useTimer();

  useEffect(() => {
    setLoading(true);
    getWeather(cityId).then(({ data }) => {
      setData(data);
      timer();
    });
    return () => clearTimeout(timer);
  }, [cityId, timer, setLoading]);

  if (loading) {
    return (
      <Wrapper src="https://i.imgur.com/GhQZhaO.jpg">
        <Loading height="55vh" width="80vh" />
      </Wrapper>
    );
  }
  return (
    <BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
      <Layout>
        <Weather
          temperature={data.main.temp}
          mainWeather={data.weather[0].main}
          humidity={data.main.humidity}
          wind={data.wind.speed}
        />
        <CityName name={data.name} />
      </Layout>
    </BackgroundImage>
  );
};

export default LocalWeather;
