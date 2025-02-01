import { useQuery } from "react-query";
import { fetchForecastData } from "../services/apiService";
export function useForecastData(city, unit) {
    return useQuery(["forecast", city, unit], () => fetchForecastData(city, unit), {
      enabled: !!city
    });
  }