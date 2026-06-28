import styles from '../ProductListComponent/ProductList.module.css'
import ProductCard from '../ProductCardComponent/ProductCard.jsx'
import SearchBar from '../SearchBarComponent/SearchBar.jsx'

import { useEffect } from "react";
import { useState } from "react";

function ProductList({ articulos }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect ( () => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) =>{
        setProducts(data.products)
    })
    .catch((err) => {
        setError(err.message)
    })
    .finally(() => {
        setLoading(false)
    })
  }, []
)

if (loading) return <p>Cargando Productos</p>
if (error) return <p>Hubo un Error</p>

const articulosFiltrados = products.filter((product) =>
product.description.toLowerCase().includes(busqueda.toLowerCase()) ||
product.title.toLowerCase().includes(busqueda.toLowerCase())
);

  return (
    <>
    <div className={styles['search-container']}>
        <SearchBar busqueda={busqueda} onBuscar={setBusqueda} />
    </div>
    <div className={styles['product-list']}>
      {articulosFiltrados.map((product) => (<ProductCard key={product.id} articulo={product}/>))}
    </div>
    </>
  )

}

export default ProductList;