import { useEffect } from "react";
import { useState } from "react";
import customFetch from "../utiles/customFetch";
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import { useParams } from "react-router-dom"
const { productos } = require ("../utiles/productos");

 const ItemListContainer = () => {
    const [datos , setDatos] = useState([]);
    const { categoryId } = useParams();

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

         const onAdd = (qty) => {
             alert("Has añadido" + qty + "productos")
         }

    return (
        <>
        <ItemList items={datos}/>
        <ItemCount stock ={5} initiall ={1} onAdd ={onAdd}/>
        </>
    )
}

export default ItemListContainer


