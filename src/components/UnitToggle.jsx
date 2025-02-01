import { useWeatherContext } from "../context/WeatherContext";
import { Switch } from "../components/ui/switch";

function UnitToggle() {
  const { unit, setUnit } = useWeatherContext();

  return (
    <div className="flex items-center justify-center sm:justify-start space-x-3 mt-1">
      <span className="text-gray-700 text-sm sm:text-base">C&deg;</span>

      <Switch
        checked={unit === "imperial"}
        onCheckedChange={() =>
          setUnit(unit === "metric" ? "imperial" : "metric")
        }
        className="bg-gray-200 checked:bg-blue-600"
      />

      <span className="text-gray-700 text-sm sm:text-base">F&deg;</span>
    </div>
  );
}

export default UnitToggle;
