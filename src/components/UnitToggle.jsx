import { useWeatherContext } from "../context/WeatherContext";
import { Switch } from "../components/ui/switch";

function UnitToggle() {
  const { unit, setUnit } = useWeatherContext();

  return (
    <div className="flex items-center space-x-3">
      <span className="text-gray-700">C&deg;</span>

      <Switch
        checked={unit === "imperial"}
        onCheckedChange={() =>
          setUnit(unit === "metric" ? "imperial" : "metric")
        }
        className="bg-gray-200 checked:bg-blue-600"
      />

      <span className="text-gray-700">F&deg;</span>
    </div>
  );
}

export default UnitToggle;
