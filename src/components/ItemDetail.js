import { Button } from '@mui/material';
import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Price, Desc } from './styleJs'; 
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';


const ItemDetail = ({ item }) => {
        const [itemCount, setItemCount] = useState(0);
        const { addItemButton} = useContext(CartContext)
        
        const onAdd = (qty,) => {
            alert("Enviaste " + qty + ` ${item.name} al carrito`);
            setItemCount(qty);

            addItemButton (item, qty);
        }


    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image} />
                    
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Price>{item.price}</Price>
                        <p className='stock'>{item.stock} unidades</p>
                        <Desc>{item.description}</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/carrito' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">Ir al Carrito</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;