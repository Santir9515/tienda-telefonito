import { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
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
            const querySnapshot = await getDocs (collection(db, "productos"));
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
    });
        }
        fetchFromFirestore()
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


