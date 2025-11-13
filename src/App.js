import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatheCard";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "e5d052e6c3d50c77a7eff417768a4d5b";

  function handleSearch() {
    if (!city) return;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setError("");

        setWeather({
          name: response.data.name,
          temp: Math.round(response.data.main.temp),
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
        });
      })
      .catch(() => {
        setWeather(null);
        setError("City not Found 😢");
      });
  }

  return (
    <div className="text-center mt-1" style={{ padding: "20px" }}>
      <h1 className="mb-3">🌤️ React Weather App</h1>

      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {error && <p className="text-danger mt-3">{error}</p>}

      {weather && (
        <WeatherCard
          name={weather.name}
          icon={weather.icon}
          temp={weather.temp}
          description={weather.description}
          humidity={weather.humidity}
          wind={weather.wind}
        />
      )}

      
    </div>
  );
};

export default App;
