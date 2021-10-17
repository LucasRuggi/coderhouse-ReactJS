import React from "react";
import "./carritoNavBar.css";
import { CartContextUse } from "../../../context/CartContext";
import Badge from "react-bootstrap/Badge";

function CarritoNavBar() {
  const { cartAmount } = CartContextUse();
  return (
    <>
      <img
        className="btnImg"
        src="/img/imgCarrito/imgCarrito.png"
        alt="carrito"
      />
      <Badge pill bg="success">
        {cartAmount}
      </Badge>
    </>
  );
}
export default CarritoNavBar;
