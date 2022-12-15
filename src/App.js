import Navbar from './components/nuevoNavbar'
import ItemListContainer from './components/ItemListContainer'
import './components/App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



 const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ='/' element={<ItemListContainer />} />
      <Route path ='/categorias/:categoryId' element={<ItemListContainer />} />
      <Route path ='/item/:idProducto' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  )


}

export default App