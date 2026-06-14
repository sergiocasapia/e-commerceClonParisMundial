import '../ProductListComponent/ProductList.css'
import ProductCard from '../ProductCardComponent/ProductCard.jsx'

function ProductList({ articulos }) {
  return (
    <div className="product-list">
      {articulos.map((articulo) => (
        <ProductCard key={articulo.id} articulo={articulo} />
      ))}
    </div>
  );
}

export default ProductList;