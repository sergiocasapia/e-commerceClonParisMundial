import '../FooterComponent/Footer.css';
function Footer({fecha, enlaces}) {
    return (
      <div className="footer">
        <footer>
          <ul className="footer-horizontal">
            {enlaces.map((item) => (
              <li key={item.id}>
                    <a href={item.url}>{item.texto}</a>
              </li>
            ))}
          </ul>
          <p>&copy; {fecha} Clon Almacenes Paris. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
}

export default Footer