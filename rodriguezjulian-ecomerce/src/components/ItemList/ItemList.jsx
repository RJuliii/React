import React from 'react';
import Item from '../Item/Item';
import "./itemList.css"


function ItemList({ products }) {
  return (
    <center>
      <div className="item-list">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </center>
  );
}

export default ItemList;