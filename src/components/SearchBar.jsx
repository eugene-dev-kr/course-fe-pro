import { useState } from "react";

function SearchBar({onSearch}) {

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onSearch(query.trim());
        setQuery("");
    };

    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть назву міста"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Пошук</button>
    </form>
  );

}

export default SearchBar;