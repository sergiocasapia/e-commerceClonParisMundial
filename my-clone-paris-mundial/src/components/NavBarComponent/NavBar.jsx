import { navbarcategorias } from '../../../src/mocks/NavBarCategorias.ts';
import '../NavBarComponent/NavBar.css';

function NavBar() {
  const handleCategoriaClick = (cat) => {
    console.log("Categoría elegida:", cat);
  }
    return (
      <nav className="navbar">
      {navbarcategorias.map((cat) => (
        <a key={cat.id} onClick={() => handleCategoriaClick(cat)}>
          {cat.categoria}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;