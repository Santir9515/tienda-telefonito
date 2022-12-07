import Navbar from './components/nuevoNavbar'
import ItemListContainer from './components/ItemListContainer'
import './components/App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


 const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ='/' element={<><ItemListContainer /></>} />
      <Route path ='/category/:idCategory' element={<><ItemListContainer /></>} />
      <Route path ='/item/:idMarca' element={<><ItemDetailContainer /></>} />
    </Routes>
    </BrowserRouter>
    </>
  )


}

export default App