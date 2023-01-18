import { useContext } from "react"
import { CartContext } from "./CartContext";



const Cart = () => {
  const { cartList,eliminarProducto, vaciarCarrito,  } = useContext(CartContext);
  
  return (
    <>
      <h1>
        Productos agregados
      </h1>
      <ul>
      {
        cartList.length === 0 
        ? <p>El carrito esta vacío</p>
        : cartList.map( item => <li key = {item.id} className="liCarrito"><div className="nombreProducto">{item.name}</div>  - cantidad: {item.qty} - <img src={item.image} alt="" className="imgCarrito"/><div>{item.price} c/u</div> <button onClick ={() => eliminarProducto (item.id)} className="buttonDelete"> Eliminar producto</button></li>)
      }
      </ul>
      <button onClick={() => vaciarCarrito ()}> Vaciar carrito</button>
      <br /><br /><br />
      <div> 
       <p> Resumen de su compra</p>
       <div>
        Total de items
        <p>()</p>
       </div>
      </div>
      </>
  )
}

export default Cart