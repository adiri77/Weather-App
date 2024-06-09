import React from "react";

const CurrentWeather = ({ data, mode }) => {
  let sunrise = data.sys.sunrise;
  let newsunrise = new Date(sunrise * 1000);
  const hour = newsunrise.getHours();
  const min = newsunrise.getMinutes();

  let sunset = data.sys.sunset;
  let newsunset = new Date(sunset * 1000);
  const hours = newsunset.getHours();
  const mins = newsunset.getMinutes();

  // Define styles
  const borderColor = mode === 'dark' ? 'white' : 'black';
  const textColor = mode === 'dark' ? 'white' : 'black';

  const styles = {
    container: {
      border: `2px solid ${borderColor}`
    },
    header: {
      borderBottom: `2px solid ${borderColor}`,
      color: textColor
    },
    text: {
      color: textColor
    },
    temperature: {
      color: textColor,
      fontSize: '2rem'
    }
  };

  return (
    <div className="container mt-4">
      <div className="card bg-transparent" style={styles.container}>
        <div className="card-header" style={styles.header}>
          <h5 className="card-title" style={styles.text}>{data.city}</h5>
          <p className="card-text" style={styles.text}>{data.weather[0].description}</p>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-text" style={styles.temperature}>
              <h1>{Math.round(data.main.temp)}°C</h1>
            </p>
            <img alt="weather" src={`icons/${data.weather[0].icon}.png`} className="weather-icon" />
          </div>
          <div className="details mt-3">
            <div className="row">
              <div className="col-sm" style={styles.text}>
                <p className="mb-0">Feels like: {Math.round(data.main.feels_like)}°C</p>
                <p className="mb-0">Wind: {data.wind.speed} m/s</p>
              </div>
              <div className="col-sm" style={styles.text}>
                <p className="mb-0">Humidity: {data.main.humidity}%</p>
                <p className="mb-0">Pressure: {data.main.pressure} hPa</p>
              </div>
              <div className="col-sm" style={styles.text}>
                <p className="mb-0">Sunrise/Sunset: {hour}:{min} AM / {hours}:{mins} PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
