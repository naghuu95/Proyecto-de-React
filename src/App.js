
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListcontainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  CartProvider } from './components/context/CartContext';



function App() {



  return (


    <CartProvider >
    <div className="App">

      <BrowserRouter>
         <NavBar />
         <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<h1> ERROR 404</h1>} />
          
         </Routes>
         
      
      </BrowserRouter>

      
    </div>
    </CartProvider>
  );
}

export default App;
