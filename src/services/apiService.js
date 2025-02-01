const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function fetchWeatherData(city, unit) {
  if (!city) return null;
  const response = await fetch(
    `${API_URL}?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  if (!response.ok) throw new Error("City not found or API error.");
  return response.json();
}

export async function fetchForecastData(city, unit) {
  if (!city) return null;
  const response = await fetch(
    `${FORECAST_API_URL}?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  if (!response.ok) throw new Error("Forecast API error.");
  return response.json();
}
