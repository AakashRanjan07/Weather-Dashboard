import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [unit, setUnit] = useState("metric");
  useEffect(() => {
    if (city) {
      localStorage.setItem("lastCity", city);
    }
  }, [city]);
  return (
    <WeatherContext.Provider value={{ city, setCity, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeatherContext = () => useContext(WeatherContext);
