import '../ProductCardComponent/ProductCard.css'
import Button from '../ButtonComponent/Button.jsx';

const agregaCarro = () => {
  console.log("agrega carro");
}

function ProductCard({ articulo }) {
    return (
      <>
      <div className="product-card">
        <img src={articulo.imagen} alt={articulo.descripcion} />
        <p className="product-marca">{articulo.marca} </p>
        <p className="product-descripcion">{articulo.descripcion}</p>
        <p className="product-precio">{articulo.price}</p>
        { articulo.isSuperDespach ? <p className="product-despacho">⚽Despacho Gratis🏆</p> : <p></p>}
        <Button productcarro titulo="🛒 Agregar al carro" onClick={agregaCarro} />
      </div>
      </>
    );
  }
  
  export default ProductCard;