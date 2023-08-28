import { useState } from 'react';

import NavBar from './components/Navbar';
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Navbar()

function App() { /// componete es una función (que comienza con Mayúscula) y retorna jsx
    const [count, setCount] =  useState(0)

    // console.log(estado)
    const titulo = 'ECommerce Altreno GYM'
    const subtitulo = 'Reserva tus planes Aqui'
    // let count = 0

    // const addCount = () => {
    //     count = count + 1
    //     console.log(count)
    //     // count ++
    //     // count += 1
    // }
    
    const addCount = () => {
        setCount(count + 1) // estado = estado +1  
        // estado + 1 -> 0 + 1
        // estado = estado + 1 -> estado = 0 + 1 
    }

    return (
        <div className='body'>
            {/* { Navbar( { titulo: '', subtitulo: ''} ) } */}
            {/* Elemento */}
            <NavBar /> 

            <Titulo titulo={titulo} subtitulo={subtitulo} />

            <label >
                <strong>{ count }</strong>
            </label>
            <button onClick={addCount} className='btnCount'> + 1 </button>
            <Footer />
            
        </div>
    )
}

export default App