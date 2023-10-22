import { BrowserRouter, Routes, Route} from "react-router-dom"

import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from "./components/context/CArtContext";
import CartContainer from "./components/CartContainer/CartContainer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// Navbar()

function App() { /// componete es una función (que comienza con Mayúscula) y retorna jsx
    return (

        <BrowserRouter>
            <CartContextProvider>
            {/* { Navbar( { titulo: '', subtitulo: ''} ) } */}
            {/* Elemento */}
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />}/>
                    <Route path="/category/:cid" element={<ItemListContainer />}/>
                    <Route path="/detail/:pid" element={<ItemDetailContainer />}/>
                    <Route path='/cart' element={<CartContainer />}/>  
                </Routes>
                <Footer />
                <ToastContainer />
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App