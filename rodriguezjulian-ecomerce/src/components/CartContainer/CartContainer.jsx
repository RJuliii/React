import { useCartContext } from "../context/CArtContext"
import "./CartContainer.css"
import { Link } from "react-router-dom";



const CartContainer = () =>{


const {cartList, deleteCart, precioTotal, eliminarProducto, confirmarCompra} = useCartContext()
    console.log(cartList)
    return (
        <div className="cart-container">
        {cartList.map(prod => <div key={prod.id}>
            <img src={prod.imageUrl} className="cart-img"/>
            <p className="cart-name"> {prod.name} <br /> ${prod.price} <br /> Cantidad: {prod.quantity} <button onClick={() => eliminarProducto(prod.id)} className="btn-delete"> X </button> </p>
        </div>)}
        {cartList.length > 0 ? (
        <div>
          <button className="btn-delete_all" onClick={deleteCart}>
            Vaciar Carrito
          </button> <br />
          <button className="btn-buy" onClick={confirmarCompra}>Comprar</button> <br />
          <h3>Precio total <br /> $ {precioTotal()}</h3>
          <button className="btn-home"> <Link to="/" className="home">Inicio🏠</Link> </button>
        </div>
      ) : (
        <div>
          <button className="detail-btn w-25" onClick={() => window.location.href="/"}>Inicio 🏠</button>
        </div>
      )}
    </div>
  );
  
}


 export default CartContainer