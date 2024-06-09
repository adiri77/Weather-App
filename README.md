Sure! Below is a professional README file for your weather application:

---

# Weather Application

This Weather Application allows users to search for cities and get the current weather and forecast information. It includes features such as dark mode and real-time date and time display.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Weather Application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone (https://github.com/adiri77/Weather-App.git)
   cd weather-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

To run the application locally:

1. **Start the development server:**

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000`.

## Features

- **City Search:** Users can search for cities with a population of over 1,000,000 to get weather information.
- **Current Weather:** Displays current weather conditions including temperature, feels-like temperature, wind speed, humidity, and pressure.
- **Forecast:** Provides a weather forecast for the searched city.
- **Dark Mode:** Toggle between dark and light modes.
- **Real-time Date and Time:** Displays the current date and time, updated every second.

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── api.js
|   |
│   ├── components/
|   |   ├──date.jsx
|   |   | 
│   │   ├── current-weather/
│   │   │   └── CurrentWeather.js
│   │   ├── forecast/
│   │   │   └── Forecast.js
|   |   |   └──Forecast.css 
|   |   |
│   │   ├── search/
│   │   │   └── Search.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

### Components

- **App.js:** Main component that handles the overall layout and state management.
- **Search.js:** Component for searching cities and fetching weather data.
- **CurrentWeather.js:** Component for displaying current weather information.
- **Forecast.js:** Component for displaying weather forecast information.
- **DateTimeComponent.js:** Component for displaying real-time date and time.

### API

- **api/index.js:** Contains API configuration and endpoints.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, please open an issue or create a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request
