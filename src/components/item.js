


const item = (props) => {
    return (
        <>
        <div className="bodyInicio">{props.name} {props.precio}
        <div>
        <button>Comprar ahora</button>
        <button>Ver Detalles</button>
        <img className="imgInicio" src = {props.image} alt = ""/>
        </div>
        </div>
        </>
    )
}

export default item