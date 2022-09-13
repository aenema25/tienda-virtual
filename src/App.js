import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const [productos, setProductos] = useState()

  const fetchProductos = async () => {
    const req = await fetch('http://localhost:3000/productos.json')
    const result = await req.json()
    if (result) {
      setProductos(result)
      localStorage.setItem('productos', JSON.stringify(result))
    }
  }

  useEffect(() => {
    fetchProductos()
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greetings={'¡ Bienvenido !'} productos={productos} />} />
        <Route path='/item/:id' element={<ItemDetailContainer type={"producto"} />} />
        <Route path='/category/:id' element={<ItemDetailContainer type={"categoria"} />} />
      </Routes>

    </div>
  );
}

export default App;
