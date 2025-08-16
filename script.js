// Weather API configuration
const API_KEY = '632bd1af817b42c2a8a132035251608';
const BASE_URL = 'https://api.weatherapi.com/v1';

// DOM elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const weatherBox = document.querySelector('.weather-box');
const errorMessage = document.getElementById('error-message');

// Weather data elements
const cityElement = document.getElementById('city');
const dateElement = document.getElementById('date');
const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weather-description');
const weatherIconElement = document.getElementById('weather-icon');
const feelsLikeElement = document.getElementById('feels-like');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const visibilityElement = document.getElementById('visibility');

// Event listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Initialize app with current date
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    // Try to get user's location weather on load
    getCurrentLocationWeather();
});

// Handle search button click
async function handleSearch() {
    const city = searchInput.value.trim();
    if (!city) return;
    
    await getWeatherData(city);
}

// Get weather data from API
async function getWeatherData(city) {
    try {
        showLoading(true);
        hideError();
        
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        displayWeatherData(data);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showError();
        hideWeather();
    } finally {
        showLoading(false);
    }
}

// Get weather for current location
async function getCurrentLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`);
                    if (response.ok) {
                        const data = await response.json();
                        displayWeatherData(data);
                        searchInput.value = data.location.name;
                    }
                } catch (error) {
                    console.error('Error getting current location weather:', error);
                }
            },
            (error) => {
                console.log('Geolocation not available:', error);
            }
        );
    }
}

// Display weather data in UI
function displayWeatherData(data) {
    const { current, location } = data;
    
    // Update city and date
    cityElement.textContent = location.name + ', ' + location.country;
    updateDate();
    
    // Update temperature and weather description
    temperatureElement.textContent = Math.round(current.temp_c);
    weatherDescriptionElement.textContent = current.condition.text;
    
    // Update weather icon
    weatherIconElement.src = current.condition.icon;
    weatherIconElement.alt = current.condition.text;
    
    // Update weather stats
    feelsLikeElement.textContent = Math.round(current.feelslike_c) + '°C';
    humidityElement.textContent = current.humidity + '%';
    windSpeedElement.textContent = Math.round(current.wind_kph) + ' km/h';
    visibilityElement.textContent = (current.vis_km) + ' km';
    
    // Show weather box and hide error
    showWeather();
    hideError();
}

// Update current date
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Show/hide functions
function showWeather() {
    weatherBox.classList.add('active');
}

function hideWeather() {
    weatherBox.classList.remove('active');
}

function showError() {
    errorMessage.classList.add('active');
}

function hideError() {
    errorMessage.classList.remove('active');
}

function showLoading(show) {
    // You can add a loading spinner here if needed
    if (show) {
        searchBtn.disabled = true;
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    } else {
        searchBtn.disabled = false;
        searchBtn.innerHTML = '<i class="fas fa-search"></i>';
    }
}

// Add some nice animations and interactions
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.transform = 'scale(1.02)';
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.transform = 'scale(1)';
});

// Add smooth transitions for weather stats
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.style.animationDelay = `${index * 0.1}s`;
        stat.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});

// Add CSS animation for stats
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .stat {
        opacity: 0;
    }
`;
document.head.appendChild(style);
