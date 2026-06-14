import ProductCard from '../ProductCardComponent/productCard.jsx'

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