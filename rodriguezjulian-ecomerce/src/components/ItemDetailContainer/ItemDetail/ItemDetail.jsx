import ItemCount from "../../Counter/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({product}) => {
    const onAdd =(count) => {
        console.log("productos seleccionados: ", count)
    }
  return (
    <div>
        <center className="col">
            <h2 className="title-detail">Detalle</h2>
            <img className="img-detail" src={product.imageUrl} alt="image" />
            <div className="detail">
                <p>Nombre: {product.name}</p>
                <p>Descripcion: {product.desc}</p>
                <p>Precio: {product.price}</p>
                <p>Stock: {product.stock}</p>
            </div>
            <div className="count-detail">
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            </div>
        </center>
    </div>
  )
}

export default ItemDetail

