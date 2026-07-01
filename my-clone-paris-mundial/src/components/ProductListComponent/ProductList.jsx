import styles from '../ProductListComponent/ProductList.module.css'
import ProductCard from '../ProductCardComponent/ProductCard.jsx'
import SearchBar from '../SearchBarComponent/SearchBar.jsx'
import Button from '../ButtonComponent/Button.jsx'

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

if (loading) return <p className={styles['loading-catalog']}>Cargando Productos...</p>
if (error) return error.includes('is not valid JSON') ? <p className={styles['loading-error']}>Problema con Carga de productos reintente</p> : <p className={styles['loading-error']}>Error de Sistema escale a Soporte {error}</p>

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
    {articulosFiltrados.length === 0 ? (
        <div className={styles['no-results']}>
          <p>No se encontraron productos para: <strong>"{busqueda}"</strong></p>
          <Button productcarro titulo="Limpiar búsqueda" onClick={() => setBusqueda("")}/>
        </div>
      ) : (        
      articulosFiltrados.map((product) => (<ProductCard key={product.id} articulo={product}/>))
      )}
    </div>
    </>
  )

}

export default ProductList;