import { createContext } from "react";
import { useState } from "react";




export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([]);

    const addItemButton = (item, qty) => {
        let sumarArticulos = cartList.find(producto => producto.id === item.id);
        if (sumarArticulos === undefined) {
        setCartList([
            ...cartList, 
            {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                qty: qty,

            }
        ])
    } else{
        sumarArticulos.qty += qty;
        setCartList([...cartList])
    }
}
    const eliminarProducto = (id) => {
        let result = cartList.filter(item => item.id !== id);
        setCartList(result);
    }

    const vaciarCarrito = () => {
        setCartList ([])
    }

    const sumaTotalxprod = (id) => {
        let index = cartList.map (item => item.id).indexOf(id)
        return cartList[index].price * cartList[index].qty
        
    }
   

    const subTotalProd = () => {
        let totalXProd = cartList.map( item => sumaTotalxprod(item.id));
        return totalXProd.reduce((valorAnt, valorAct) => valorAnt + valorAct)
    }
     

    const totalProd = () => {
        return subTotalProd()
    }
    
    
    
    const prodEnCarrito = () => {
        let cantidad = cartList.map(item => item.qty);
        return cantidad.reduce(((valorAnt, valorAct) => valorAnt + valorAct), 0)
    }

    return (
        <CartContext.Provider value={{
        cartList,
        addItemButton,
        eliminarProducto, 
        vaciarCarrito, 
        sumaTotalxprod, 
        subTotalProd, 
        totalProd,
        prodEnCarrito}}>
            {children}
        </CartContext.Provider>

    
    )
    
}


export default CartContextProvider;


