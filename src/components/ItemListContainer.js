import { useEffect } from "react";
import { useState } from "react";
import customFetch from "../utiles/customFetch";
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
const { productos } = require ("../utiles/productos");

 const ItemListContainer = () => {
    const [datos , setDatos] = useState([]);
    const { categoryId } = useParams();
    const agregarAlCarrito = () => {
        alert('Agregaste al carrito este producto')
     }

    useEffect (() => {
        if (categoryId) {
            customFetch (2000, productos.filter(item => item.categoryId === categoryId
            ))
            .then(response => setDatos (response))
            .catch(err => console.log(err))

        } else{
            customFetch (2000, productos
                )
                .then(response => setDatos (response))
                .catch(err => console.log(err))
        }
        }, [categoryId]);

    return (
        <>
        <ItemList items={datos} onAdd={agregarAlCarrito} />
        </>
    )
}

export default ItemListContainer


