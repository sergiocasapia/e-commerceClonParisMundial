import styles from  '../ProductCardComponent/ProductCard.module.css'
import Button from '../ButtonComponent/Button.jsx';

const agregaCarro = () => {
  console.log("agrega carro");
}

function ProductCard({ articulo }) {
    return (
      <>
      <div className={styles['product-card']}>
        <img src={articulo.thumbnail} alt={articulo.descripcion} />
        <p className={styles['product-marca']}>{articulo.brand} </p>
        <p className={styles['product-marca']}>{articulo.title}</p>
        <p className={styles['product-descripcion']}>{articulo.description}</p>
        <p className={styles['product-precio']}>{articulo.price}</p>
        { articulo.price >= 200.00 ? <p className={styles['product-despacho']}>⚽Despacho Gratis🏆</p> : <p></p> }
        <Button productcarro titulo="🛒 Agregar al carro" onClick={agregaCarro} />
      </div>
      </>
    );
  }
  
  export default ProductCard;