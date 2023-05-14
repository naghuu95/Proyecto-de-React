
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListcontainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import { Checkout } from './components/Checkout/Checkout';
import { PiePagina } from './components/PiePagina/PiePagina';
import { Nosotros } from './components/Nosotros/Nosotros';
import Home from './components/Home/Home';



function App() {



  return (


    <CartProvider >
    <div className="App">

      <BrowserRouter>
         <NavBar/>
         
         <Routes>
           
          <Route path="/" element={<Home />} />
         

          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1> ERROR 404</h1>} />
         </Routes>
         <PiePagina/>
         
      
      </BrowserRouter>

    </div>
    

    </CartProvider>
  );
}

export default App;
