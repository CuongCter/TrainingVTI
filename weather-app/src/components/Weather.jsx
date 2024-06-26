import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherRequest } from '../actions/weatherActions';

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherRequest(city));
  };

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  const getBackgroundClass = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return 'bg-blue-100';
      case 'Clouds':
        return 'bg-gray-100';
      case 'Rain':
      case 'Drizzle':
        return 'bg-blue-200';
      case 'Thunderstorm':
        return 'bg-purple-100';
      case 'Snow':
        return 'bg-white';
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Dust':
      case 'Fog':
      case 'Sand':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        return 'bg-gray-300';
      default:
        return 'bg-blue-100';
    }
  };

  const backgroundClass = weather.data ? getBackgroundClass(weather.data.weather[0].main) : 'bg-blue-100';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${backgroundClass}`}>
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Get Weather
          </button>
        </div>
      </form>
      {weather.loading && <p className="text-xl mt-4">Loading...</p>}
      {weather.error && <p className="text-xl text-red-500 mt-4">Error: {weather.error}</p>}
      {weather.data && (
        <div className="border-4 border-blue-300 rounded-sm p-8 mt-8" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <h2 className="text-2xl font-bold mb-4">{weather.data.name}, {weather.data.sys.country}</h2>
          <div className="flex items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`}
              alt="weather icon"
              className="w-16 h-16 mr-4"
            />
            <div>
              <p className="text-xl">Temperature: {kelvinToCelsius(weather.data.main.temp)}°C</p>
              <p className="text-xl">Humidity: {weather.data.main.humidity}%</p>
              <p className="text-xl">Wind Speed: {weather.data.wind.speed} m/s</p>
              <p className="text-xl">Wind Direction: {weather.data.wind.deg}°</p>
              {weather.data.rain && <p className="text-xl">Rain (last 1h): {weather.data.rain['1h']} mm</p>}
              <p className="text-xl">Cloudiness: {weather.data.clouds.all}%</p>
              <p className="text-xl">Weather: {weather.data.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
