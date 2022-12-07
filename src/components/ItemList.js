import Item from './item'



const ItemList = (props) => {
    return (
        <>
        {
        props.datos.map( item => <Item  key={item.id} name={item.name} image = {item.image} precio = {item.price}/>)
}
        </>
    )
}

export default ItemList