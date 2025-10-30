const getWeatherDescription = (code, isDay) => {
    // WMO (World Meteorological Organization) codes
    const descriptions = {
        0: { icon: '☀️', text: 'Ясно' },
        1: { icon: '🌤️', text: 'Переважно ясно' },
        2: { icon: '⛅', text: 'Частково хмарно' },
        3: { icon: '☁️', text: 'Похмуро' },
        45: { icon: '🌫️', text: 'Туман' },
        48: { icon: '🌫️', text: 'Ожеледиця' },
        51: { icon: '🌧️', text: 'Мряка легка' },
        61: { icon: '🌧️', text: 'Невеликий дощ' },
        63: { icon: '🌧️', text: 'Помірний дощ' },
        80: { icon: '☔', text: 'Невеликий зливний дощ' },
        85: { icon: '🌨️', text: 'Невеликий сніг' },
        95: { icon: '⛈️', text: 'Гроза' },
    };
    // Якщо код не знайдено, або це ніч, повертаємо дефолт
    const defaultIcon = isDay ? '🌕' : '🌙'; 
    return descriptions[code] || { icon: defaultIcon, text: 'Невизначена' };
};

function WeatherCard({ cityInfo, data, onFavoriteToggle, isFavorite }) {
    if (!cityInfo || !data) return null;

    // Поточна погода
    const { current_weather, daily } = data;
    const { temperature, windspeed, weathercode, is_day } = current_weather;
    
    // Отримання опису та іконки
    const { icon, text } = getWeatherDescription(weathercode, is_day === 0);
    
    // Форматування прогнозу на кілька днів
    const forecastDays = daily.time.slice(1, 4).map((date, index) => ({
        day: new Date(date).toLocaleDateString('uk-UA', { weekday: 'short' }),
        min: daily.temperature_2m_min[index + 1].toFixed(0),
        max: daily.temperature_2m_max[index + 1].toFixed(0),
    }));

    return (
        <div>
            {/* Заголовок та кнопка "Обране" */}
            <div>
                <div>
                    <h2>{cityInfo.name}, {cityInfo.country}</h2>
                    <p>{new Date().toLocaleDateString('uk-UA', { dateStyle: 'full' })}</p>
                </div>
                <button
                    onClick={() => onFavoriteToggle(cityInfo)} // Будемо реалізовувати на наступному етапі
                >
                    {isFavorite ? '❤️ Видалити' : '🤍 Додати в обрані'}
                </button>
            </div>

            <div>
                <span>{icon} | </span>
                <span>{temperature}°C | </span>
                <span>{text}</span>
                <p>💨 Швидкість вітру: {windspeed} км/год</p>
            </div>

            <h3>Прогноз на 3 дні:</h3>
            <div>
                {forecastDays.map((day, index) => (
                    <div key={index}>
                        <span>{day.day} : </span>
                        <span>Макс.{day.max}° | </span>
                        <span>Мін. {day.min}° </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherCard;