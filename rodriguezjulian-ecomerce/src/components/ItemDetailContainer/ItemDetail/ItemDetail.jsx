import { Link } from "react-router-dom";
import ItemCount from "../../Counter/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { useCartContext } from "../../context/CArtContext";

const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    addProduct({ ...product, quantity });
    setIsCounter(false);
  };
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
          {product.stock > 0 && isCounter ? (
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          ) : product.stock > 0 ? (
            <>
              <Link to="/cart">
                <button className="detail-btn"> Carrito 🛒</button>
              </Link>
              <Link to="/">
                <button className="detail-btn"> Inicio 🏠</button>
              </Link>
            </>
          ) : (
            <Link to="/">
              <button className="detail-btn"> Inicio 🏠</button>
            </Link>
          )}
        </div>
      </center>
    </div>
  );
};

export default ItemDetail;
