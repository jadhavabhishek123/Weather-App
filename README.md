# Weather App

A beautiful, responsive weather web application built with HTML, CSS, and JavaScript that provides real-time weather information for any city in the world.

## Features

- 🌍 **Search by City**: Enter any city name to get current weather information
- 📍 **Current Location**: Automatically detects and shows weather for your current location
- 🌡️ **Temperature**: Current temperature in Celsius
- 💨 **Weather Details**: Feels like temperature, humidity, wind speed, and visibility
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Real-time**: Uses WeatherAPI for accurate, up-to-date weather data

## How to Use

1. **Open the app**: Simply open `index.html` in your web browser
2. **Search for a city**: Type a city name in the search box and press Enter or click the search button
3. **View weather**: The app will display current weather information including:
   - City name and country
   - Current date
   - Temperature
   - Weather description
   - Weather icon
   - Feels like temperature
   - Humidity percentage
   - Wind speed
   - Visibility

## API Key

This app uses the WeatherAPI service. The API key is already included in the code:
- **API Key**: `632bd1af817b42c2a8a132035251608`
- **Base URL**: `https://api.weatherapi.com/v1`

## Files Structure

```
weather-app/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and animations
├── script.js           # JavaScript functionality and API calls
└── README.md           # This file
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## Features in Detail

### Search Functionality
- Type any city name and press Enter or click search
- Real-time weather data fetching
- Error handling for invalid city names

### Current Location
- Automatically detects your location on page load
- Shows weather for your current area
- Uses browser geolocation API

### Responsive Design
- Adapts to different screen sizes
- Mobile-friendly interface
- Touch-friendly buttons and inputs

### Animations
- Smooth hover effects on interactive elements
- Fade-in animations for weather stats
- Loading states and transitions

## Troubleshooting

- **City not found**: Make sure the city name is spelled correctly
- **Location not working**: Allow location access in your browser
- **API errors**: Check your internet connection

## Future Enhancements

- 5-day weather forecast
- Weather maps
- Multiple unit support (Celsius/Fahrenheit)
- Weather alerts and notifications
- Dark/light theme toggle

## License

This project is open source and available under the MIT License.

---

Enjoy your weather app! 🌤️
