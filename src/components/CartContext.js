import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([]);

    const addItemButton = (item, qty) => {
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
    }

    const eliminarProducto = (id) => {
        const eliminarItem = cartList.filter(item => item.id !== id)
        setCartList (eliminarItem)
    }

    const vaciarCarrito = () => {
        const eliminarTodo = cartList.filter (item => item=== item.id)
        setCartList (eliminarTodo)

    }


    return (
        <CartContext.Provider value={{cartList, addItemButton, eliminarProducto, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;


