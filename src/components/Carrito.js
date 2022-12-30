import { useContext } from "react"
import { CartContext } from "./CartContext";



const Cart = () => {
  const { cartList } = useContext(CartContext);

  return (
    <>
      <h1>
        Soy el carrito
      </h1>
      <ul>
      {
        cartList.length === 0 
        ? <p>El carrito esta vacio</p>
        : cartList.map( item => <li key = {item.id}>{item.name}</li>)
      }
      </ul>
      </>
  )
}

export default Cart