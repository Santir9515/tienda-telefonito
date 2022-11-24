import { BsFillCartCheckFill } from 'react-icons/bs';

const nuevoNavbar = () => {
    return (
      <>
      <div className="navbarHeader">
      <div className='tituloPrincipal'>
        <h1>Tienda el Telefonito</h1>
      </div>
      <div className="categorias">
        <span className='botonInicio'>Inicio</span>
        <span className='botonCatalogo'>Catalogo</span>
        <span className='botonContacto'>Contacto</span>
      </div>
      <div className="iconoCarrito">
        <BsFillCartCheckFill />
      </div>
      </div>
      </>
    )
  }
  
  export default nuevoNavbar;