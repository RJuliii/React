import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import Titulo from "../Titulo/Titulo"
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [ products, setProduct ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const { cid } = useParams()
    
    useEffect(()=>{
      if (cid) {
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        const queryFilter = query(queryCollection, where("category", "==", cid))
        getDocs(queryFilter)
        .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      } else {
        const db = getFirestore()
        const queryCollection = collection(db, "products")
        getDocs(queryCollection)
        .then(resp => setProduct(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
      }
    }, [cid])  


    console.log(products)
  return (
    <center>
        <Titulo titulo='CREA TU PROPIO ESTILO' subtitulo='Conoce nuestras prendas'  />
        {loading ? <h2 className='load'>Loading ...</h2> : <ItemList products={products} />}
    </center>
  )
}


export default ItemListContainer