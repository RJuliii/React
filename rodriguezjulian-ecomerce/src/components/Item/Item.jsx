import React from 'react';

import "./item.css"
import { Link } from 'react-router-dom';
function Item({ product }) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="img-detail w-100" src={product.imageUrl} alt="imagen prenda" />
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      <div className="card-footer">
        <Link to={`/detail/${product.id}`}>
          <button className="card-btn">Detalle</button>
          </Link>
      </div>
    </div>
  );
}

export default Item;