import { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {

  const [city, setCity] = useState('');

  const handleSearch = (name) => {
    setCity(name);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Погода</h1>

      <SearchBar onSearch={handleSearch} />

      {city && (
        <p style={{ marginTop: "20px" }}>
          Ви шукаєте погоду для міста: <strong>{city}</strong>
        </p>
      )}
    </div>
  );
}

export default App
