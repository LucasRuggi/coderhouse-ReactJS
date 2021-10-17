import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemCount.css";
import { CartContextUse } from "../../context/CartContext";

export default function ItemCount({ onAdd, producto }) {
  const [count, setCount] = useState(1);
  const { MySwal } = CartContextUse();

  function sumar() {
    if (count < producto.cantidad) {
      setCount(count + 1);
    } else {
      MySwal.fire({
        icon: "error",
        text: "No hay mas stock de este producto!",
        confirmButtonColor: "#626668c9",
        background: "#c9c6bd",
      });
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  let precioTotal = count * producto.precio;

  return (
    <div>
      <div className="buy d-flex containerBtnCount">
        <h5 className="precioCount">Total: ${precioTotal}</h5>
      </div>

      <div className="buy d-flex containerBtnCount">
        <button className="btn buyBtnCountMenos " onClick={restar}>
          -
        </button>

        <div className="d-flex">
          <h4 className="txtCountBtn"> {count}</h4>
        </div>

        <button className="btn buyBtnCountMas" onClick={sumar}>
          +
        </button>
      </div>
      <div className="buy d-flex containerBtnCount">
        <Link to="/">
          <button className="btn buyBtnOther btnCount">Volver</button>
        </Link>

        <button
          className="btn buyBtnOther btnCount"
          onClick={() => onAdd(count)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
