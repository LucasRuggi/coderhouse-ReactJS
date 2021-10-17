import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";
import "./itemDetail.css";
import { CartContextUse } from "../../context/CartContext";

export default function ItemDetail({ unProducto }) {
  const [estadoBoton, setBoton] = useState(true);
  const { addItem } = CartContextUse();

  const onAdd = (qty) => {
    addItem(unProducto, qty);
    setBoton(false);
  };

  return (
    <>
      <div
        className="row d-flex justify-content-center detail_container py-2"
        key={unProducto.id}
      >
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={unProducto.img}
            className="imgDetail"
            alt={unProducto.titulo}
          ></img>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex text_container">
            <div className="bar"></div>
            <div className=" text-left">
              <h5 className="product_title">{unProducto.titulo}</h5>
              <p className="product_desc">{unProducto.descripcion}</p>
              <p className="card-text">{unProducto.precio}</p>
            </div>
          </div>
        </div>
        <div>
          {estadoBoton ? (
            <ItemCount producto={unProducto} onAdd={onAdd} />
          ) : (
            <div className="d-flex justify-content-center">
              <Link to="/">
                <div className="btnCountainerTerminar">
                  <button className="buyBtn">Seguir comprando</button>
                </div>
              </Link>
              <Link to="/cart">
                <div className="btnCountainerTerminar">
                  <button className="buyBtn">Ir al carrito</button>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
