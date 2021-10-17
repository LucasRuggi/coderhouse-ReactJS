import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState("");
  const [cartTotal, setCartTotal] = useState("");
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const amount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartAmount(amount);
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce(
      (acc, unidad) => acc + unidad.quantity * unidad.item.precio,
      0
    );
    setCartTotal(total);
  }, [cart]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart];

      updateQty.forEach((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
          if (element.quantity > element.item.cantidad) {
            MySwal.fire({
              icon: "error",
              text: "Ya agregaste la cantidad maxima que tenemos en stock!",
              confirmButtonColor: "#626668c9",
              background: "#c9c6bd",
            });
            element.quantity = element.item.cantidad;
          }
        }
      });
      setCart(updateQty);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const isInCart = (id) => cart.find((element) => element.item.id === id);

  const clearCart = () => setCart([]);

  const removeItem = (id) => {
    const cartFilter = cart.filter((element) => element.item.id !== id);
    setCart(cartFilter);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clearCart,
        removeItem,
        cartAmount,
        cartTotal,
        MySwal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
