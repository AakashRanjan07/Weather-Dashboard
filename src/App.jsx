import SearchInput from "./components/SearchInput";
import UnitToggle from "./components/UnitToggle";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./context/WeatherContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <div className="app-container bg-gradient-to-b from-[#58638e] via-[#d0d4e6] via-[#a1a8c0] to-[#7f886e] min-h-screen flex flex-col items-center justify-start py-2">
          <h1 className="app-title text-4xl font-extrabold mb-2">
            Weather Dashboard
          </h1>
          <SearchInput />
          <UnitToggle />
          <WeatherDisplay />
        </div>
      </WeatherProvider>
    </QueryClientProvider>
  );
}

export default App;
