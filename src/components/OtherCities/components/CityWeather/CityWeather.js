import styled from "styled-components";
import WeatherIcon from "../../../../WeatherIcon";
import Temperature from "../../../Temperature";

const Button = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  padding: 0;
  margin: 0;
  outline: 0;
  font-size: 1rem;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid rgb(255, 69, 0, 0.2);
  }
`;

const CityName = styled.div`
  width: 100px;
  margin-right: 1rem;
`;

const StyledTemperature = styled(Temperature)`
  width: 4rem;
`;

const StyledWeatherIcon = styled(WeatherIcon)`
  height: 50px;
  width: 50px;
`;

const CityWeather = ({ name, temperature, weather, onClick }) => {
  return (
    <Button onClick={onClick}>
      <CityName>{name}</CityName>
      <StyledTemperature value={temperature} />
      <StyledWeatherIcon
        value={weather.icon}
        description={weather.description}
      />
    </Button>
  );
};

export default CityWeather;
