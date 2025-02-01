# Weather Dashboard

This is a weather dashboard built with React that allows users to search for cities and view current weather conditions, including temperature, humidity, wind speed, and weather description. Additionally, it displays a 5-day weather forecast. The dashboard allows users to toggle between metric (Celsius) and imperial (Fahrenheit) units.

## Features

- **Current Weather**: Displays the current temperature, humidity, wind speed, and weather condition (icon-based).
- **5-Day Forecast**: Shows the weather forecast for the next 5 days, updated every 3 hours.
- **Unit Toggle**: Switch between Celsius (°C) and Fahrenheit (°F) units for temperature and wind speed (m/s vs mph).
- **City Search**: Allows users to search for the weather in any city.
- **Responsive UI**: Built with a mobile-first approach using Tailwind CSS.

## Setup

To run the project locally, follow these steps:

1. Clone the Repository

    git clone https://github.com/AakashRanjan07/Weather-Dashboard.git
   
    cd weather-dashboard

3. Install Dependencies

    npm install

4. Set Up API Key

   The weather data is fetched from OpenWeatherMap API. You'll need to obtain your own API key:
       Go to OpenWeatherMap and sign up for a free API key.
       Once you have your API key, add in .env file to VITE_API_KEY

5.  Start the Development Server

    npm run dev
    
    The app will be available at http://localhost:5173


