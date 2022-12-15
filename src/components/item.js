import { Link } from "react-router-dom"
import { ProductContainer } from "./styleJs"



const item = ({id, name, image, price}) => {
    return (
        <ProductContainer>
        <div className="bodyInicio">{name} {price}
        <div>
        <img className="imgInicio" src = {image} alt = ""/>
        <button>Comprar ahora</button>
        <button><Link to= {`/item/${id}`} style={{textDecoration: "none", color: "Black"}}>Ver Detalles</Link></button>
        </div>
        </div>
        </ProductContainer>
    )
}

export default item