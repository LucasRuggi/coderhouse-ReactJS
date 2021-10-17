import React from "react";
import { CartContextUse } from "../../context/CartContext";
import CarritoDetail from "../carritoDetail/carritoDetail";
import { Link } from "react-router-dom";

export default function CartContainer() {
  const { cart } = CartContextUse();

  const carritoVacio = (
    <div>
      <h2 className="text-center">El carrito esta vacio!</h2>
      <div className="buy d-flex containerBtnCount">
        <Link to="/">
          <button className="btn buyBtnOther btnCount">Volver</button>
        </Link>
      </div>
    </div>
  );

  return <>{cart.length === 0 ? carritoVacio : <CarritoDetail />}</>;
}
