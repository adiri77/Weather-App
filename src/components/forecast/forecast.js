import React from "react";


import "./forecast.css";
import { Accordion} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data, mode }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  console.log(data);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion class="mt-2" defaultActiveKey="0"  >
        {data.list.splice(0, 7).map((item, idx) => (
        <Accordion.Item eventKey={idx.toString()} key={idx} className={`bg-transparent text-${mode === "dark" ? "light" : ""}`}>
        <Accordion.Header >
          <div className="daily-item bg-transparent">
            <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
            <label className="day">{forecastDays[idx]}</label>
            <label className="description" style={{color: mode === 'dark' ? 'black' : 'black'}}>{item.weather[0].description}</label>
            <label className="min-max">{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C</label>
          </div>
        </Accordion.Header>
        <Accordion.Body >
          <div className="daily-details-grid">
            <div className="daily-details-grid-item">
              <label>Pressure:</label>
              <label style={{color: mode === 'dark' ? 'white' : 'black'}}>{item.main.pressure}</label>
            </div>
            <div className="daily-details-grid-item">
              <label>Humidity:</label>
              <label style={{color: mode === 'dark' ? 'white' : 'black'}} >{item.main.humidity}</label>
            </div>
            <div className="daily-details-grid-item">
              <label>Clouds:</label>
              <label style={{color: mode === 'dark' ? 'white' : 'black'}}>{item.clouds.all}%</label>
            </div>
            <div className="daily-details-grid-item">
              <label>Wind speed:</label>
              <label style={{color: mode === 'dark' ? 'white' : 'black'}}>{item.wind.speed} m/s</label>
            </div>
            <div className="daily-details-grid-item">
              <label>Sea level:</label>
              <label style={{color: mode === 'dark' ? 'white' : 'black'}}>{item.main.sea_level}m</label>
            </div>
            <div className="daily-details-grid-item">
              <label>Feels like:</label>
              <label style={{color: mode === 'dark' ? 'white' : 'black'}}>{item.main.feels_like}°C</label>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
    </>
  );
};

export default Forecast;