import React, { useEffect, useState } from 'react'
import { mFetch } from '../../utils/mockFetch'
import ItemList from '../ItemList/ItemList'
import Titulo from "../Titulo/Titulo"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [ products, setProduct ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { cid } = useParams()
    
    useEffect(()=>{
      if (cid) {
        mFetch()
        .then((respuesta) => setProduct( respuesta.filter(product => cid === product.category )))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
      } else {
        mFetch()
        .then((respuesta) => setProduct(respuesta))
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
      }
    }, [cid])  

    //creo mi propia base de datos

    // useEffect(() =>{
    //   const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
    //   fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "atuhorization":"Bearer alasfdafjaskfslakf"
    //     },
    //     body: JSON.stringify([{id:1, name:"producto 1"}])
    //   })
    //   .then(resp => resp.json())
    //   .then(resp => console.log(resp.results))
    // }, []) Mandar algun post de algun formulario


    // async y await
    // const [pokemons, setPokemons] = useState([])
    // const getFetch = async () => {
    //   try{
    //   const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20";
    //   const pokesJson = await fetch(url);
    //   const pokes = await pokesJson.json();
    //   console.log(pokesJson);
    //   setPokemons(pokes.results);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }


    // useEffect(() =>{
    //   const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
    //   fetch(url)
    //   .then(resp => resp.json())
    //   .then(resp => setProduct(resp.results))
    //   .catch((err) => console.log(err))
    //   .finally(()=> setLoading(false))
    // }, [])

    console.log(products)
  return (
    <center>
        <Titulo titulo='CREA TU PROPIO ESTILO' subtitulo='Conoce nuestras prendas'  />
        {loading ? <h2 className='load'>Loading ...</h2> : <ItemList products={products} />}
    </center>
  )
}


export default ItemListContainer