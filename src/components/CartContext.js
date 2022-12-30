import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([]);

    const addItemButton = (item) => {
        setCartList({
            ...cartList, 
            item
        })
    }
    return (
        <CartContext.Provider value={{cartList, addItemButton}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;


