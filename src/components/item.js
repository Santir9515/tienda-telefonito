import { Link } from "react-router-dom"
import { ProductContainer } from "./styleJs"




const item = ({id, name, image, price, stock}) => {
    return (
        <ProductContainer>
        <div className="bodyInicio">{name} {price}
        <div>
        <img className="imgInicio" src = {image} alt = ""/>
        <p className="stock">{stock} unidades</p>
        <button className="buttonDetalle"><Link to= {`/item/${id}`} style={{textDecoration: "none", color: "white"}}>Ver Detalles</Link></button>
        </div>
        </div>
        </ProductContainer>
    )
}

export default item