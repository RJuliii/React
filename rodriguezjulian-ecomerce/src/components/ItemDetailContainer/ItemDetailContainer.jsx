import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mFetch } from "../../utils/mockFetch"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    const [ loading, setLoading ] = useState(true)

    useEffect(()=> {
      const db = getFirestore()
      const queryDoc = doc(db, "products", pid)

      getDoc(queryDoc)
      .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
                } else {
                    console.log("Documento no encontrado");
                }
            })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
}, [])
  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer