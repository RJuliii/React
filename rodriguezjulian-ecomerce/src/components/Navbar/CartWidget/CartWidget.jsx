import { useCartContext } from "../../context/CArtContext"
import "./CartWidget.css"

function CartWidget () {
    const {cantidadTotal} = useCartContext()
    return(
        <div className="cart">
            🛒
            {cantidadTotal() === 0 ? "" : cantidadTotal()}
            
        </div>
    )
}

export default CartWidget