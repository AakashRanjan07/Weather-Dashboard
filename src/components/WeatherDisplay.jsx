import { weatherIconMapper } from "../utils/weatherIconMapper";
import { useWeatherData } from "../hooks/useWeatherData";
import { useWeatherContext } from "../context/WeatherContext";

function WeatherDisplay() {
  const { city, unit } = useWeatherContext();
  const { data: weatherData, error } = useWeatherData(city, unit);

  if (error) return <p className="error-message">{error.message}</p>;
  if (!weatherData)
    return (
      <p className="info-message">
        Please search for a city to display weather.
      </p>
    );

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="forecast">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start sm:space-x-96 w-full">
        <h1 className="text-white text-3xl sm:text-2xl md:mr-44 md:text-5xl font-bold ">
          {city}
        </h1>
        <p className="text-white text-lg sm:text-xl sm:mt-0 mt-2">
          {currentTime}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl text-white">
          {weatherIconMapper(weatherData.weather[0].main)}
        </div>
        <p className="text-white text-5xl sm:text-6xl md:text-7xl font-semibold ">
          {weatherData.main.temp}°{unit === "metric" ? "C" : "F"}
        </p>
        <p className="text-white text-lg sm:text-xl">{currentDate}</p>
        <p className="text-white text-lg sm:text-xl">
          Wind: {weatherData.wind.speed} {unit === "metric" ? "m/s" : "mph"}
        </p>
        <p className="text-white text-lg sm:text-xl">
          Condition: {weatherData.weather[0].description}
        </p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
