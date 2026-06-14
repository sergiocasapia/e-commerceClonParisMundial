import '../../components/HeaderComponent/Header.css';
import logoParis from '../../assets/imagenes/logoParis.png'; 
import logomundial from '../../assets/imagenes/logomundial.png';
import Button from '../ButtonComponent/Button.jsx';

const abrirLogin = () => {
  console.log("abrir login");
}

const abrirCarro = () => {
  console.log("abrir carro");
}

function Header() {
    return (
      <header className="main-header">
        <div className="logo-container">
            <a href="https://paris.cl" target="_blank" rel="noopener noreferrer" className="paris-link">
            <img src={logoParis} alt="Almacenes Paris" className="paris-logo"/></a>
            <p className="paris-text">Clon Almacenes Paris</p>
            <a> <img src={logomundial} alt="Logo mundial" className="mundial-logo"/></a>
        </div>
        <div>
        <Button titulo="👤 Ingresa o regístrate" onClick={abrirLogin} />
        <Button secundario titulo="🛒 Carro" onClick={abrirCarro} />
        </div>
      </header>
    );
  }

  export default Header;