import { useQuery } from "react-query";
import { fetchWeatherData } from "../services/apiService";

export function useWeatherData(city, unit) {
  return useQuery(["weather", city, unit], () => fetchWeatherData(city, unit), {
    enabled: !!city,
  });
}
