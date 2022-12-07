import { useEffect, useState } from "react";
import customFetch from "../utiles/customFetch";
import ItemDetail from "./ItemDetail"
const {productos} = require('../utiles/productos')


function ItemDetailContainer() {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, productos[1])
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

