import { Button } from '@mui/material';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Price } from './styleJs'; 
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
 
const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);

    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Price>{item.price}</Price>
                        <p>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nostrum beatae iste voluptatibus debitis modi dolor sequi non nobis hic laborum, consequuntur minus ut quasi officiis recusandae quos ratione tempore.</p>
                        <Button>Agregar al Carrito</Button>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}
}

export default ItemDetail