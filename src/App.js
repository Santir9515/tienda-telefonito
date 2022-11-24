import Navbar from './components/nuevoNavbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import './components/App.css'


const App = () => {
  return (
    <>
    <Navbar />
    <ItemListContainer mensaje= "Hola ItemListContainer" />
    </>
  )


}

export default App;