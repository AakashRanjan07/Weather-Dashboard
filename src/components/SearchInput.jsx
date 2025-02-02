import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../components/ui/input";
import { useWeatherContext } from "../context/WeatherContext";

function SearchInput() {
  const { setCity } = useWeatherContext();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue) setCity(inputValue);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-lg px-4 sm:px-6 md:px-8 mt-2">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name..."
        className="w-full sm:w-3/4 md:w-2/3 h-12 p-4 rounded-l-md border placeholder:text-gray-800"
      />

      <button
        onClick={handleSearch}
        className="h-12 bg-blue-600 text-white px-5 rounded-r-md hover:bg-blue-700 transition-all flex items-center justify-center"
      >
        <FaSearch className="text-white text-lg" />
      </button>
    </div>
  );
}

export default SearchInput;
