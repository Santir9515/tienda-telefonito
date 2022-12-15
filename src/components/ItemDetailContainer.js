import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utiles/customFetch";
import ItemDetail from "./ItemDetail"
const {productos} = require('../utiles/productos')


function ItemDetailContainer() {
    const [dato, setDato] = useState({});
    const { idProducto } = useParams (); 

    useEffect(() => {
        customFetch(2000, productos.find(item => item.id === parseInt(idProducto)))
            .then(result => setDato(result))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <ItemDetail item={dato} />
        </>
    );
}

export default ItemDetailContainer

