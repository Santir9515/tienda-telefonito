import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { ProductAmount, ProductAmountContainer } from './styleJs';


const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
      setCount(initial);
  },[]);


  const increment = () => {
    if (count < stock) {
        setCount (count + 1);
    }
  }

  const decrement = () => {
    if (count > initial+1) {
        setCount (count - 1);
    }
  }
  
  
    return (
     <ProductAmountContainer>
            <Button variant='text' onClick={increment} className = "botonAgregar">Agregar</Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant='text' onClick={decrement}>Quitar</Button>
    </ProductAmountContainer>
  )
}
export default ItemCount