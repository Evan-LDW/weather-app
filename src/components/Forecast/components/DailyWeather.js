import styled from "styled-components";
import WeatherIcon from "../../../WeatherIcon";
import Temperature from "../../Temperature";

const Wrapper = styled.div`
  text-align: center;
  & ~ & {
    margin-left: 0.5rem;
  }
`;

const StyledWeatherIcon = styled(WeatherIcon)`
  height: 70px;
  width: 70px;
`;

const DailyWeather = ({ day, weather, temperature }) => {
  return (
    <Wrapper>
      <div>{day}</div>
      <StyledWeatherIcon
        value={weather.icon}
        description={weather.description}
      />
      <div>
        <Temperature value={temperature} />
      </div>
    </Wrapper>
  );
};
export default DailyWeather;
