import Items from "./item";

export default function ItemList({ productos }) {
  return (
    <>
      {productos.map((unProducto, index) => (
        <Items productos={unProducto} key={index} />
      ))}
    </>
  );
}
