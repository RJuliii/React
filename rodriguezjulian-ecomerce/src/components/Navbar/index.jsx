import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return (
      <Navbar className="navBar">
        <Container>
          <Navbar.Brand href="#home">ALTRENO POINT</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#planes">Planes</Nav.Link>
            <Nav.Link href="#promociones">Promociones</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          </Nav>
          <Nav.Link href='#cart'>
            Carrtio<CartWidget />
          </Nav.Link>
        </Container>
      </Navbar>
  );
}
export default NavBar