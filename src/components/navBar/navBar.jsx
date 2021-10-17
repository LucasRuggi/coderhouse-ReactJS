import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CarritoNavBar from "./CarritoNavBar/CarritoNavBar";
import LogoGenialoso from "./logo.jsx";
import { Link } from "react-router-dom";
import "./navBar.css";
import { CartContextUse } from "../../context/CartContext";

function NavBar() {
  const { cart } = CartContextUse();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navBarFondo">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <LogoGenialoso />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="txtLink">
                Inicio
              </Nav.Link>

              <NavDropdown title="Productos" className="navBarFondo">
                <NavDropdown.Item
                  as={Link}
                  to="/categorias/veladores"
                  className="txtLink "
                >
                  Veladores
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/categorias/espejos"
                  className="txtLink"
                >
                  Espejos
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/categorias/lamparas"
                  className="txtLink"
                >
                  Lamparas
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to="/cart">
              {cart.length === 0 ? null : <CarritoNavBar />}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
