import { BrowserRouter, Routes, Route} from "react-router-dom"

import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




// Navbar()

function App() { /// componete es una función (que comienza con Mayúscula) y retorna jsx
    return (
        <BrowserRouter>
            {/* { Navbar( { titulo: '', subtitulo: ''} ) } */}
            {/* Elemento */}
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/category/:cid" element={<ItemListContainer />}/>
                <Route path="/detail/:pid" element={<ItemDetailContainer />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App