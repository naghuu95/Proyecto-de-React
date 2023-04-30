
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListcontainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './components/context/CartContext';
import { useState } from 'react';


function App() {

const [carrito,setCarrito]= useState([])

console.log(carrito);

const addToCart =(item)=>{
  setCarrito([...carrito,item])
}

const calcularCantidad =()=>{
  return carrito.reduce((acc,prod)=> acc + prod.cantidad , 0)
}

  return (


    <CartContext.Provider value={{addToCart, calcularCantidad}}>
    <div className="App">

      <BrowserRouter>
         <NavBar />
         <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1> ERROR 404</h1>} />
          
         </Routes>
         
      
      </BrowserRouter>

      
    </div>
    </CartContext.Provider>
  );
}

export default App;
