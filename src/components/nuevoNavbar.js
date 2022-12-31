import { Link } from 'react-router-dom';
import { Center, Left, Logo, MenuItem, Right, Wrapper } from './styleJs';
import CartWidget from "./CartWidget"

const nuevoNavbar = () => {
    return (
      <>
       <Wrapper className='navbarHeader'>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "Black"}}><Logo>Tienda El Telefonito</Logo></Link>
                </Left>
                <Center>
                    <Link to='/categorias/2' style={{textDecoration: "none", color: "Black"}}><MenuItem>Motorola</MenuItem></Link>
                    <Link to='/categorias/1' style={{textDecoration: "none", color: "Black"}}><MenuItem>Samsung</MenuItem></Link>
                    <Link to='/categorias/3' style={{textDecoration: "none", color: "Black"}}><MenuItem>Accesorios</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Registrarse</MenuItem>
                    <MenuItem>Ingresa</MenuItem>
                    <MenuItem><CartWidget/></MenuItem>
                </Right>
            </Wrapper>
      </>
    )
  }
  
  export default nuevoNavbar;