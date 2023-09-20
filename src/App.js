import "./App.css";
import SavedCities from "./components/SavedCities";
import SearchBar from "./components/SearchBar";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/WeatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData();
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-cyan-700 h-fit shadow-xl">
      <SavedCities />
      <SearchBar />

      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;
