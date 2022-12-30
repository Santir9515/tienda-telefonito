import Navbar from './components/nuevoNavbar'
import ItemListContainer from './components/ItemListContainer'
import './components/App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrito from './components/Carrito'
import  CartContextProvider  from './components/CartContext'



 const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ='/' element={<ItemListContainer />} />
      <Route path ='/categorias/:categoryId' element={<ItemListContainer />} />
      <Route path ='/item/:idProducto' element={<ItemDetailContainer />} />
      <Route path='/carrito' element = {<Carrito />} />
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );


}

export default App

