import './SearchBar.css';
function SearchBar({ busqueda, onBuscar }) {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="¿Qué Estás Buscando?"
        value={busqueda}
        onChange={(e) => onBuscar(e.target.value)}
      />
    );
  }

  export default SearchBar;