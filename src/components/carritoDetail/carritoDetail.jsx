import { useState } from "react";
import { CartContextUse } from "../../context/CartContext";
import FormOrder from "../form/FormOrder";

export default function CarritoDetail() {
  const { clearCart, removeItem, cart, cartTotal } = CartContextUse();
  const [finalizarCompra, setFinalizarCompra] = useState(true);

  return (
    <>
      {finalizarCompra ? (
        <>
          <div className="text-center ">
            <div>
              <button
                className="btn buyBtnOtherRemove btnCount"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
              <button
                className="btn buyBtnOtherFinish btnCount"
                onClick={() => setFinalizarCompra(false)}
              >
                Finalizar compra
              </button>
            </div>
            <h3>Total del carrito: ${cartTotal}</h3>
            <div className="container-fluid col-lg-12 contenedorCarrito">
              <div className="row justify-content-center">
                {cart.map((element) => {
                  return (
                    <div
                      className="detail_container-cart d-flex"
                      key={element.item.id}
                    >
                      <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center ">
                        <img
                          src={element.item.img}
                          className="imgDetail"
                          alt={element.item.titulo}
                        ></img>
                      </div>
                      <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="d-flex text_container">
                          <div className=" text-center">
                            <h2 className="product_title  justify-content-center ">
                              {element.item.titulo}
                            </h2>

                            <h3 className=" justify-content-center ">
                              Cantidad: {element.quantity}
                            </h3>
                            <div className="buy d-flex containerBtn">
                              <button
                                className="btn buyBtnOtherRemove btnCount  justify-content-center "
                                onClick={() => removeItem(element.item.id)}
                              >
                                Sacar item
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <FormOrder />
      )}
    </>
  );
}
