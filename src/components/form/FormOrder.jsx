import { useState } from "react";
import { CartContextUse } from "../../context/CartContext";
import "./formOrder.css";
import OrderDetail from "./ordenDetails";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../../servicios/firebase";

export default function FormOrder() {
  const { cartAmount, cartTotal, cart, clearCart, MySwal } = CartContextUse();
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
  });
  const handleOnSubmit = () => {
    let orden = {};

    orden.buyer = formData;
    orden.total = cartTotal;
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.cantidad = cartAmount;
    orden.items = cart.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.titulo;
      const price = cartItem.item.precio;
      const cantidad = cartItem.quantity;
      return { id, title, price, cantidad };
    });

    const db = getFirestore();
    db.collection("orders")
      .add(orden)
      .then((resp) =>
        MySwal.fire({
          title: <strong>Gracias por su compra</strong>,
          html: <i>Su id de compra es: {resp.id}</i>,
          icon: "success",
          iconColor: "#19a63f",
          confirmButtonColor: "#626668c9",
          background: "#c9c6bd",
        })
      )
      .finally(clearCart);
  };

  const handleOnChange = (change) => {
    setFormData({
      ...formData,
      [change.target.name]: change.target.value,
    });
  };

  let validacionForm;

  if (
    !/\S@\S/.test(formData.email) ||
    formData.telefono === "" ||
    formData.direccion === "" ||
    formData.nombre === ""
  ) {
    validacionForm = true;
  } else {
    validacionForm = false;
  }

  return (
    <div>
      <div className="container-fluid containerOrder">
        <div className="mt-3 ">
          <OrderDetail />
        </div>
      </div>
      <div className="container-fluid containerForm">
        <form onChange={handleOnChange}>
          <div className="form-group mt-3">
            <h5 className="mx-4 mb-3">
              Es necesario completar el formulario para realizar la compra!
            </h5>
            <label htmlFor="name">Nombre y Apellido</label>
            <input
              placeholder="Nombre completo"
              type="text"
              className="form-control"
              id="name"
              name="nombre"
              defaultValue={formData.nombre}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              placeholder="12345678"
              type="number"
              className="form-control"
              id="phone"
              name="telefono"
              defaultValue={formData.telefono}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              placeholder="email@email"
              type="email"
              className="form-control"
              id="email"
              name="email"
              defaultValue={formData.email}
              required
            />
          </div>
          <div className="form-group ">
            <label htmlFor="address">Dirección</label>
            <input
              placeholder="Calle falsa 123"
              type="text"
              className="form-control"
              id="address"
              name="direccion"
              defaultValue={formData.direccion}
              required
            />
          </div>
        </form>
        <div>
          {validacionForm ? (
            <>
              <button type="submit" className="btn botonEnviarOrden">
                Enviar Orden
              </button>
            </>
          ) : (
            <button
              type="submit"
              className="btn botonEnviarOrdenComplete"
              onClick={handleOnSubmit}
            >
              Enviar Orden
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
