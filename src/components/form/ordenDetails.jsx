import { CartContextUse } from "../../context/CartContext";

const OrderDetail = () => {
  const { cart, cartAmount, cartTotal } = CartContextUse();
  return (
    <div className="orderContainer p-4 mb-5">
      <div>
        <h2 className="mb-5 mt-2 text-center">Detalle de tu Orden</h2>
        {cart.map((e) => {
          return (
            <div
              className="d-flex justify-content-center flex-wrap mb-1"
              key={e.item.id}
            >
              <p className="cartInfo col-md-4 col-12 px-0">
                <strong>• Producto:</strong> {e.item.titulo}
              </p>
              <p className="cartInfo col-md-2 col-12 px-0">
                <strong>Cantidad:</strong> {e.quantity}
              </p>
              <p className="cartInfo col-md-3 col-12 px-0">
                <strong>Precio: </strong> $ {e.item.precio}
              </p>
              <p className="cartInfo col-md-2 col-12 px-0">
                <strong> Total: ${e.item.precio * e.quantity}</strong>
              </p>
            </div>
          );
        })}
        <div className="d-flex justify-content-start text-center mt-3">
          <p className="cartInfo orderFinal col-12 px-0 py-2">
            Cantidad de Productos: {cartAmount} <span className="px-3">-</span>{" "}
            Total: ${cartTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
