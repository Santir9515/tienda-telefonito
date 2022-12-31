import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { ProductAmount, ProductAmountContainer } from './styleJs';




const ItemCount = ({ stock = 0, initial = 0,  onAdd }) => {
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
    if (count > initial + 1) {
        setCount (count - 1);
    }
  }
  
  
    return (
     <ProductAmountContainer>
            <Button variant='text' onClick={increment}>+</Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant='text' onClick={decrement}>-</Button>
            {
              stock && count
              ? <Button variant='contained' color="primary" onClick={() => onAdd (count)}>Agregar al carrito</Button>
              : <Button variant='contained' disabled>Agregar al carrito</Button>
            }
    </ProductAmountContainer>
  )
}
export default ItemCount