import { navbarcategorias } from '../../../src/mocks/NavBarCategorias.js';
import '../NavBarComponent/NavBar.css';

function NavBar() {
  const handleCategoriaClick = (cat) => {
    console.log("Categoría elegida:", cat);
  }
    return (
      <nav className="navbar">
        <ul className="navbar-horizontal">
	          {navbarcategorias.map((cat) => (
	          <li key={cat.id} onClick={() => handleCategoriaClick(cat)}>
	             <a>{cat.categoria}</a>
	          </li>
	          ))}
        </ul>
    </nav>
  );
}

export default NavBar;