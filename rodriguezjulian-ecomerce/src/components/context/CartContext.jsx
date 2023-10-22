import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'
import React from 'react';
import { toast } from 'react-toastify';




const CartContext  = createContext([])

export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)
    
    
    const addProduct = (newProduct)=>{
        const index = isProduct(newProduct.id)
        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity 
            setCartList([...cartList]) 
        } else {
            setCartList([
                ...cartList,
                newProduct
            ])            
        }

    }

        // Eliminar por producto
        const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))

        // mostrar la cantidad de productos total que tienen 
        const cantidadTotal = ()=> cartList.reduce((cantidadTotal, objProduct)=> cantidadTotal += objProduct.quantity ,0)

        // precio total (()=>{}, inicializador de precio total)
        const precioTotal = () => cartList.reduce((precioTotal, objProduct)=> precioTotal += (objProduct.price * objProduct.quantity) ,0)
    


    const deleteCart = () => {
        toast.success('Se ha vaciado el carrito', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        setCartList([])
    }

    const confirmarCompra = () =>{
        Swal.fire({
          title: '¿Desea confirmar la compra?',
          background: "rgba(255, 255, 255, 0.80)",
          color: "black",
          showDenyButton: true,
          confirmButtonText: 'Confirmar',
          denyButtonText: `Cancelar`,
          confirmButtonColor: "green"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              position: 'center',
              title: 'Muchas gracias por tu compra ',
              text: "✔️✔️✔️",
              background: "rgba(255, 255, 255, 0.80)",
              color: "black",
              showConfirmButton: false,
              timer: 1500
            });
            localStorage.clear()
            setTimeout(() => {
              window.location.href = '/';
            }, 2000);
          } else if (result.isDenied) {
            Swal.fire({
              title: "Tu compra no ha sido procesada",
              icon: 'error',
              background: "rgba(255, 255, 255, 0.80)",
              color: "black",
              confirmButtonColor: "green"
            })
          }
        })
      }


  return (
    <CartContext.Provider value={{
        cartList,
        addProduct,
        deleteCart,
        cantidadTotal,
        precioTotal,
        eliminarProducto,
        confirmarCompra,
    }}>
        {children}
    </CartContext.Provider>
    
  )
}



export default CartContextProvider