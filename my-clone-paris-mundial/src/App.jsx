import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/HeaderComponent/Header.jsx'
import NavBar from './components/NavBarComponent/NavBar.jsx'
import Footer from './components/FooterComponent/Footer.jsx'
import ProductList from './components/ProductListComponent/ProductList.jsx'
import { articulos } from '../src/mocks/articulos.js'  
import { enlacesFooter } from '../src/mocks/enlacesfooter.js'


function App() {
  const [count, setCount] = useState(0)

  const fechaActual = new Date().getFullYear();

  return (
   
    <>
  
    <div className="app-container">
      <Header/>
      <NavBar/>  
      <main>
        <ProductList articulos={articulos} />
      </main>
      <Footer fecha={fechaActual} enlaces={enlacesFooter}/>
    </div>
    </>
  )
}

export default App
