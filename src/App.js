import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListarItemsCargados from "./components/container/itemListContainer";
import ItemDetailContainer from "./components/container/itemDetailContainer";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/container/CartContainer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ListarItemsCargados} />
          <Route
            exact
            path="/categorias/:selector"
            component={ListarItemsCargados}
          />
          <Route
            exact
            path="/categorias/:selector/:idSelector"
            component={ItemDetailContainer}
          />
          <Route exact path="/cart" component={CartContainer} />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
