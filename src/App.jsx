import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import FavoritesList from './components/FavoritesList';

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search?count=1&language=uk&name=';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto';

function App() {

  const [city, setCity] = useState('');

  const [cityInfo, setCityInfo] = useState(null); // {lat, lon, name, country}
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [weatherData, setWeatherData] = useState(null); // Дані про погоду (поточна та прогноз)
  const [isWeatherLoading, setIsWeatherLoading] = useState(false); // Окремий стан завантаження
  const [weatherError, setWeatherError] = useState(null); // Окрема помилка

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  })

   useEffect(() => {
    if (!city) {
      setCityInfo(null);
      return;
    }

    const fetchCoordinates = async () => {
      setIsLoading(true);
      setError(null);
      setCityInfo(null);

      try {
        const response = await fetch(`${GEOCODING_URL}${city}`);

        if (!response.ok) {
           throw new Error(`Помилка мережі: ${response.status}`);
        }
        
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
          throw new Error(`Місто "${city}" не знайдено. Спробуйте іншу назву.`);
        }

        const { latitude, longitude, name, country } = data.results[0];
        setCityInfo({
          lat: latitude,
          lon: longitude,
          name: name,
          country: country
        });

      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoordinates();
    
  }, [city]);


  useEffect(() => {
    if (!cityInfo) {
      setWeatherData(null);
      return;
    }

    const fetchWeather = async () => {
      setIsWeatherLoading(true);
      setWeatherError(null);
      setWeatherData(null);

      try {
        const url = `${WEATHER_URL}&latitude=${cityInfo.lat}&longitude=${cityInfo.lon}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
           throw new Error(`Помилка завантаження погоди: ${response.status}`);
        }
        
        const data = await response.json();
        setWeatherData(data); 
        
      } catch (e) {
        setWeatherError(e.message);
      } finally {
        setIsWeatherLoading(false);
      }
    };

    fetchWeather();
    
}, [cityInfo]); 

  const handleSearch = (name) => {
    setCity(name);
  }

  const handleFavoriteToggle = (cityObj) => {
    const exists = favorites.some(fav => fav.name === cityObj.name);

    let updated;
    if (exists) {
      // Якщо вже є — видаляємо
      updated = favorites.filter(fav => fav.name !== cityObj.name);
    } else {
      // Якщо немає — додаємо
      updated = [...favorites, cityObj];
    }

    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
};

const getBackgroundClass = (weathercode, isDay) => {
  if (!weathercode) return 'weather-default';

  if ([0, 1, 2].includes(weathercode)) return isDay ? 'weather-sunny' : 'weather-night';
  if ([3, 45, 48].includes(weathercode)) return 'weather-cloudy';
  if ([51, 61, 63, 80].includes(weathercode)) return 'weather-rain';
  if ([85, 86].includes(weathercode)) return 'weather-snow';
  if ([95].includes(weathercode)) return 'weather-storm';

  return 'weather-default';
};

const backgroundClass = weatherData ? getBackgroundClass(weatherData.current_weather.weathercode, weatherData.current_weather.is_day === 0) : 'weather-default';

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }} className={backgroundClass}>
      <h1>Погода</h1>

      <SearchBar onSearch={handleSearch} />

      <div>
          {(isLoading || isWeatherLoading) && (
              <p>
                <span>Завантаження даних для {city}...</span>
              </p>
          )}

          {error && (
              <p>
                  ⚠️ **Помилка Geocoding:** {error}
              </p>
          )}
          
          {weatherError && (
              <p>
                  ⚠️ **Помилка Погоди:** {weatherError}
              </p>
          )}

          {weatherData && !isLoading && !isWeatherLoading && (
              <p>
                  ✅ Дані погоди успішно завантажено. Готуємо картку...
              </p>
          )}
      </div>

          <WeatherCard 
            cityInfo={cityInfo} 
            data={weatherData}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.some(fav => fav.name === cityInfo?.name)} 
        />

        <FavoritesList 
          favorites={favorites} 
          onSelect={(name) => setCity(name)}
        />

    </div>
  );
}

export default App
