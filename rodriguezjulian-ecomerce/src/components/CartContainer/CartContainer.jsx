import { useState } from "react";
import { useCartContext } from "../context/CArtContext"
import "./CartContainer.css"
import { Link } from "react-router-dom";





const CartContainer = () =>{
const [dataForm, setDataForm,] = useState({
  name: "",
  phone: "",
  email: "",
})

const {cartList, deleteCart, precioTotal, eliminarProducto, confirmarCompra,} = useCartContext()
    const handleOnChange =(evt) => {
      setDataForm({
        ...dataForm,
        [evt.target.name] : evt.target.value
      })
    }
    return (
        <div className="cart-container">
        {cartList.map(prod => <div key={prod.id}>
            <img src={prod.imageUrl} className="cart-img"/>
            <p className="cart-name"> {prod.name} <br /> ${prod.price} <br /> Cantidad: {prod.quantity} <button onClick={() => eliminarProducto(prod.id)} className="btn-delete"> X </button> </p>
        </div>)}
        {cartList.length > 0 ? (
        <div>
          <h3>Precio total <br /> $ {precioTotal()}</h3>
          <form onSubmit={confirmarCompra}>
                <input required
                  type="text" 
                  name="name" 
                  placeholder="Ingresar el nombre " 
                  value={dataForm.name}
                  onChange={handleOnChange}
                  /> <br />
                <input required 
                  type="number" 
                  name="phone" 
                  placeholder="Ingresar el telefono" 
                  value={dataForm.phone}
                  onChange={handleOnChange}
                  /> <br />
                <input required
                  type="email" 
                  name="email" 
                  placeholder="Ingresar el email" 
                  value={dataForm.email}
                  onChange={handleOnChange}
                  /> <br />
            <button className="btn-buy" onClick={confirmarCompra}>
                  Comprar
            </button>
          </form>

          <button className="btn-delete_all" onClick={deleteCart}>
            Vaciar Carrito
          </button> <br />
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