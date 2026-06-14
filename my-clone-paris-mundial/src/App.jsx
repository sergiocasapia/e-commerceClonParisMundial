import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/HeaderComponent/Header.jsx'
import NavBar from './components/NavBarComponent/NavBar.jsx'
import ProductList from './components/ProductListComponent/ProductList.jsx'
import { articulos } from '../src/mocks/articulos.js'  

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
  
    <div className="app-container">
      <Header/>
      <NavBar/>  
      <main>
        <ProductList articulos={articulos} />
      </main>

    </div>
    </>
  )
}

export default App
