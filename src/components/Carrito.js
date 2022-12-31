import { useContext } from "react"
import { CartContext } from "./CartContext";



const Cart = () => {
  const { cartList,eliminarProducto, vaciarCarrito } = useContext(CartContext);

  return (
    <>
      <h1>
        Soy el carrito
      </h1>
      <ul>
      {
        cartList.length === 0 
        ? <p>El carrito esta vacío</p>
        : cartList.map( item => <li key = {item.id}>{item.name} - cantidad: {item.qty} - <img src={item.image} alt=""/> <button onClick ={() => eliminarProducto (item.id)}> Eliminar producto</button></li>)
      }
      </ul>
      <button onClick={() => vaciarCarrito ()}> Vaciar carrito</button>
      </>
  )
}

export default Cart