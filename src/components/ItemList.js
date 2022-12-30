import Item from './item'
import { ProductsContainer } from './styleJs'



const ItemList = ({items, onAdd}) => {
    return (
        <ProductsContainer>
        {
            items.map( item => <Item  key={item.id} id={item.id} name={item.name} image = {item.image} precio = {item.price} stock = {item.stock} />)
}       
        </ProductsContainer>
        
    )
}

export default ItemList


