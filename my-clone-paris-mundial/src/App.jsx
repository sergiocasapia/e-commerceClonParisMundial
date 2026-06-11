import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/HeaderComponent/Header.jsx'
import NavBar from './components/NavBarComponent/NavBar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
  
    <div className="app-container">
      <Header/>
      <NavBar/>  
      <main>

      </main>

    </div>
    </>
  )
}

export default App
