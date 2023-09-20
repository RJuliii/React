import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mFetch } from "../../utils/mockFetch"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()

    useEffect(()=> {
        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
    // .finally(set loading)
}, [])
  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer