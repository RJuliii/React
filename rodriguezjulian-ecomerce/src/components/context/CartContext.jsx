import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import React from "react";
import { toast } from "react-toastify";
import { getFirestore, doc, writeBatch, getDoc } from "firebase/firestore"


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);

  const isProduct = (id) => cartList.findIndex((prod) => prod.id === id);

  const addProduct = (newProduct) => {
    const index = isProduct(newProduct.id);
    if (index !== -1) {
      cartList[index].quantity += newProduct.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newProduct]);
    }
  };

  const eliminarProducto = (pid) =>
    setCartList(cartList.filter((prod) => prod.id !== pid));

  const cantidadTotal = () =>
    cartList.reduce(
      (cantidadTotal, objProduct) => (cantidadTotal += objProduct.quantity),
      0
    );

  const precioTotal = () =>
    cartList.reduce(
      (precioTotal, objProduct) =>
        (precioTotal += objProduct.price * objProduct.quantity),
      0
    );

  const deleteCart = () => {
    toast.success("Se ha vaciado el carrito", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setCartList([]);
  };

  const confirmarCompra = async (evt) => {
    evt.preventDefault()

    Swal.fire({
      title: "¿Desea confirmar la compra?",
      background: "rgba(255, 255, 255, 0.80)",
      color: "black",
      showDenyButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: "Cancelar",
      confirmButtonColor: "green",
    }).then((result) => {
      const order = {};
      order.buyer = "dataForm"
      if (result.isConfirmed) {
        order.items = cartList.map((prod) => {
          return {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            quantity: prod.quantity,
          };
          
        });
        order.total = precioTotal();
        const queryDB = getFirestore();
        const batch = writeBatch(queryDB);
        order.items.forEach((item) => {
          const productId = item.id;
          const quantityPurchased = item.quantity;
          const productRef = doc(queryDB, "products", productId);
          getDoc(productRef)
            .then((productDoc) => {
              if (productDoc.exists()) {
                const productData = productDoc.data();
                const currentStock = productData.stock;
                if (currentStock >= quantityPurchased) {
                  const newStock = currentStock - quantityPurchased;
                  const productBatch = writeBatch(queryDB);
                  productBatch.update(productRef, {
                    stock: newStock,
                  });
                  productBatch
                    .commit()
                }
              }
            })
        });
        batch
          .commit()
          .then(() => {
            Swal.fire({
              position: "center",
              title: "Muchas gracias por tu compra",
              text: "✔️✔️✔️",
              background: "rgba(255, 255, 255, 0.80)",
              color: "black",
              showConfirmButton: false,
              timer: 1500,
            });
            setCartList([]);
            setTimeout(() => {
            }, 2000);
          })
      } else if (result.isDenied) {
        Swal.fire({
          title: "Tu compra no ha sido procesada",
          icon: "error",
          background: "rgba(255, 255, 255, 0.80)",
          color: "black",
          confirmButtonColor: "green",
        });
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProduct,
        deleteCart,
        cantidadTotal,
        precioTotal,
        eliminarProducto,
        confirmarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;