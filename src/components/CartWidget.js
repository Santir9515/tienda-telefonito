import { ShoppingCart  } from "@mui/icons-material";
import { Badge } from "@mui/material";

const CartWidget = () => {
    return (
        <Badge badgeContent={1} color="secondary">
            <ShoppingCart />
        </Badge>
    );
}

export default CartWidget;