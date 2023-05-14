import { createContext, useEffect } from "react";
import { useState } from "react";


export const CartContext = createContext()

const init =JSON.parse (localStorage.getItem('carrito')) || [ ]

export const CartProvider =({children})=>{

    const [carrito,setCarrito]= useState(init)

    useEffect(()=>{
      localStorage.setItem('carrito',JSON.stringify (carrito))
    }, [carrito])

    console.log(carrito);
    

    const addToCart = (newItem) => {
      const existeItem = carrito.find(item => item.id === newItem.id && item.talle === newItem.talle);
      if (existeItem) {
        setCarrito(carrito.map(item => {
          if (item.id === newItem.id && item.talle === newItem.talle) {
            return { ...item, cantidad: item.cantidad + newItem.cantidad };
          } else {
            return item;
          }
        }));
      } else {
        setCarrito([...carrito, newItem]);
      }
    };












    /*-------------*/ 
    
    const calcularCantidad =()=>{
      return carrito.reduce((acc,prod)=> acc + prod.cantidad , 0)
    }
    
    const precioTotal =()=>{
      return carrito.reduce((acc,prod)=> acc + prod.precio*prod.cantidad,0)
    }

    const removerItem = (prod) => {
      setCarrito(carrito.filter(item => !(item.id === prod.id && item.talle === prod.talle)));
    };

    /*
    const removerItem=(itemId)=>{
      const newCart = carrito.filter((prod)=>prod.id !== itemId)
      setCarrito(newCart)
    }*/
    
    const vaciarCarrito=()=>{
      setCarrito([])
    }

    return (
        <CartContext.Provider value={{addToCart, calcularCantidad,precioTotal,removerItem,carrito,vaciarCarrito}} >
            {children}
        </CartContext.Provider>
    )
}