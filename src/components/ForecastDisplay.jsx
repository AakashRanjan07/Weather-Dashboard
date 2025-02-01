import { useForecastData } from "../hooks/useForecastData";
import { Card, CardContent } from "../components/ui/card";
import { weatherIconMapper } from "../utils/weatherIconMapper";
import { useWeatherContext } from "../context/WeatherContext";

function ForecastDisplay() {
  const { city, unit } = useWeatherContext();
  const { data: forecastData } = useForecastData(city, unit);

  if (!forecastData) return null;

  return (
    <div className="mt-4">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {forecastData.list.slice(0, 5).map((item, index) => (
          <Card
            key={index}
            className="bg-white bg-opacity-30 backdrop-blur-md text-center py-2 shadow-lg"
          >
            {console.log(item)}
            <CardContent>
              <p className="text-white text-lg font-semibold mb-2">
                {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
                  new Date(item.dt_txt)
                )}
              </p>
              {weatherIconMapper(item.weather[0].main)}
              <p className="text-white text-lg mt-2">
                {item.main.temp}°{unit === "metric" ? "C" : "F"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ForecastDisplay;
