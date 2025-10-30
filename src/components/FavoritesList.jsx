function FavoritesList({ favorites, onSelect }) {
  if (favorites.length === 0) return <p>Обраних міст ще немає</p>;

  return (
    <ul>
      {favorites.map((city, idx) => (
        <li key={idx}>
          <button onClick={() => onSelect(city.name)}>
            {city.name}, {city.country}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
