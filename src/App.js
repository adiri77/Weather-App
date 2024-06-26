import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import DateTimeComponent from "./components/date";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (mode === "dark") {
      bodyElement.classList.add("dark-mode");
    } else {
      bodyElement.classList.remove("dark-mode");
    }
  }, [mode]);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  const handleToggle = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const labelStyle = {
    color: mode === "dark" ? "#fff" : "#000",
  };

  return (
    <Container id="body">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} mode={mode} />}
        {forecast && <Forecast data={forecast} mode={mode} />}
        <div>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label={mode === "dark" ? "Dark mode" : "Light mode"}
              onClick={handleToggle}
              style={labelStyle}
            />
          </Form>
        </div>
      </div>
      <DateTimeComponent mode={mode} />
    </Container>
  );
}

export default App;
