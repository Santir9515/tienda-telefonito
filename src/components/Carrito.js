import { useContext } from "react"
import { CartContext } from "./CartContext";




const Cart = () => {
  const ctx = useContext(CartContext);
  return (
    <>
      <h1>
        Productos agregados
      </h1>
      <ul>
      {
        ctx.cartList.length === 0 
        ? <p className="">El carrito esta vacío</p>
        : ctx.cartList.map( item => <li key = {item.id} className="liCarrito"><div className="nombreProducto">{item.name}</div>  - cantidad: {item.qty} - <img src={item.image} alt="" className="imgCarrito"/><div className="precioCarrito">$ {item.price} c/u</div> <div className="montoCarrito">Monto: ${ctx.sumaTotalxprod(item.id)} </div> <button onClick ={() => ctx.eliminarProducto(item.id)} className="buttonDelete"> Eliminar producto</button></li>)
      
      }
      </ul>
      <button onClick={() => ctx.vaciarCarrito()}> Vaciar carrito</button>
      <br /><br /><br />
       <p className="resumenCompra"> Resumen de su compra</p>
       <div>
        <p className="totalItems">Total de items ({ctx.prodEnCarrito()})</p>
       </div>
      <div className="precioFinal"> 
        ${ctx.totalProd()} finales
      </div>
      <br/>
      <div className="divButton">
      <button className="buttonComprar">Comprar ahora</button>
      </div>
      </>
  )
}

export default Cart