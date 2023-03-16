import { ShoppingCart  } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const CartWidget = () => {
    const ctxSuma = useContext(CartContext)
    return (
        <Badge badgeContent={ctxSuma.prodEnCarrito()} color="primary">
            <ShoppingCart /> 
        </Badge>
        
    );
}

export default CartWidget;