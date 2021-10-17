import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LoaderIcon from "../utils/loaderIcon/loaderIcon";
import { getFirestore } from "../../servicios/firebase";
import ItemDetail from "../tienda/itemDetail";

export default function ItemDetailContainer() {
  const [productosState, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idSelector } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();

    dbQuery
      .collection("items")
      .doc(idSelector)
      .get()

      .then((item) => {
        setProductos({ id: item.id, ...item.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idSelector]);

  return (
    <>
      <div className="d-flex justify-content-center mr-2 mt-5">
        {loading ? (
          <div>
            <LoaderIcon />
          </div>
        ) : (
          <ItemDetail unProducto={productosState} />
        )}
      </div>
    </>
  );
}
