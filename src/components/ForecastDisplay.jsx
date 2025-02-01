import { useForecastData } from "../hooks/useForecastData";
import { Card, CardContent } from "../components/ui/card";
import { weatherIconMapper } from "../utils/weatherIconMapper";
import { useWeatherContext } from "../context/WeatherContext";

function ForecastDisplay() {
  const { city, unit } = useWeatherContext();
  const { data: forecastData } = useForecastData(city, unit);

  if (!forecastData) return null;

  return (
    <div className="mt-2">
    <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
      5-Day Forecast
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {forecastData.list.slice(0, 5).map((item, index) => (
        <Card
          key={index}
          className="bg-white bg-opacity-30 backdrop-blur-md text-center py-2 shadow-lg"
        >
          <CardContent>
            <p className="text-white text-lg sm:text-xl font-semibold mb-2">
              {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
                new Date(item.dt_txt)
              )}
            </p>
            {weatherIconMapper(item.weather[0].main)}
            <p className="text-white text-lg sm:text-xl mt-2">
              {item.main.temp}°{unit === "metric" ? "C" : "F"}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
)}  

export default ForecastDisplay;
