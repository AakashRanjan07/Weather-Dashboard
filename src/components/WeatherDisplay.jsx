import { weatherIconMapper } from "../utils/weatherIconMapper";
import { useWeatherData } from "../hooks/useWeatherData";
import { useWeatherContext } from "../context/WeatherContext";
import ForecastDisplay from "./ForecastDisplay";

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
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className="max-h-screen flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold">
          {city || "Sample Text"}
        </h1>
        <p className="text-white text-xl">{currentTime}</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl text-white mb-2">
          {weatherIconMapper(weatherData.weather[0].main)}
        </div>
        <p className="text-white text-5xl font-semibold mb-4">
          {weatherData.main.temp}°{unit === "metric" ? "C" : "F"}
        </p>
        <p className="text-white text-lg">{currentDate}</p>
        <p className="text-white text-lg">
          Wind: {weatherData.wind.speed} {unit === "metric" ? "m/s" : "mph"}
        </p>
        <p className="text-white text-lg">Condition: {weatherData.weather[0].description}</p>
        <ForecastDisplay />
      </div>

    </div>
  );
}

export default WeatherDisplay;
