const WeatherIcon = ({ value, description, className }) => {
  return (
    <img
      className={className}
      src={`https://openweathermap.org/img/wn/${value}@2x.png`}
      alt={description}
    />
  );
};

export default WeatherIcon;
