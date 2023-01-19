import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { db } from "../utiles/firebaseconfig";



function ItemDetailContainer() {
    const [dato, setDato] = useState({});
    const { idProducto } = useParams (); 

    useEffect(() => {
        const fetch1FromFirestore = async () => {
            const docRef = doc(db, "productos", idProducto);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              const item = {
                id: idProducto,
                ...docSnap.data()
            }
              setDato(item)
            } else {
              
            }
        }
        fetch1FromFirestore()
    }, []);

    return (
        <>
            <ItemDetail item={dato} />
        </>
    );
}

export default ItemDetailContainer

