import { Button } from '@mui/material';
import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Price } from './styleJs'; 
 
const ItemDetail = ({ item }) => {


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
                        <p>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nostrum beatae iste voluptatibus debitis modi dolor sequi non nobis hic laborum, consequuntur minus ut quasi officiis recusandae quos ratione tempore.</p>
                        <Button>Agregar al Carrito</Button>
                    </InfoContainer>
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;