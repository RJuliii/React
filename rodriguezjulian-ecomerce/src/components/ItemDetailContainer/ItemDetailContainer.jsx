import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", pid);

    getDoc(queryDoc)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const productData = { id: docSnapshot.id, ...docSnapshot.data() };
          if (productData.stock === 0) {
            Swal.fire({
              icon: "error",
              title: "Producto sin stock",
              text: "Este producto está agotado en este momento.",
            });
          }
          setProduct(productData);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [pid]);
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
