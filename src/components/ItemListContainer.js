import { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { db } from "../utiles/firebaseconfig";


 const ItemListContainer = () => {
    const [datos , setDatos] = useState([]);
    const { categoryId } = useParams();
    const agregarAlCarrito = () => {
        alert('Agregaste al carrito este producto')
     }



    //Component didUpdate
    useEffect ( () => {
        const fetchFromFirestore = async() => {
            let q; 
            if (categoryId) {
                q = query(collection(db, "productos"), where('categoryId', '==', categoryId))
            }else {
                q = query(collection(db, "productos"))
            }
            const querySnapshot = await getDocs(q);
            const productosDeFirestore = querySnapshot.docs.map(item => ({
                id: item.id,
                ...item.data()
            }))
            return productosDeFirestore
        }
        fetchFromFirestore()
        .then(result => setDatos(result))
        .catch(err => console.log(err))
   }, [categoryId]);

   //Component willUnmount
   useEffect (() => {
    return (() => {
        setDatos([])
    })
   },[])

    return (
        <>
        <ItemList items={datos} onAdd={agregarAlCarrito} />
        </>
    )
}

export default ItemListContainer


