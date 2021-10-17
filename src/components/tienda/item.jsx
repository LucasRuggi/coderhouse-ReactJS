import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ productos }) {
  const productoPorId = `/categorias/${productos.categoria}/${productos.id}`;

  return (
    <div
      key={productos.id}
      className="card mx-2 my-2 d-flex justify-content-center"
    >
      <img
        className="img-fluid align-self-center"
        src={productos.img}
        alt="img"
      />
      <div className="d-flex">
        <div className="bar"></div>
        <div className="card-body text-left ml-1">
          <h5 className="card-title">{productos.titulo}</h5>
          <p className="card-text">{productos.precio}</p>
          <div className="d-flex justify-content-around">
            <div className="buy d-flex containerBtn">
              <Link to={productoPorId}>
                <button className="btn buyBtn">Detalle</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
