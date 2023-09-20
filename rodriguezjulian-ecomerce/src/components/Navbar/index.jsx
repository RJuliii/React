import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';

import "./navbar.css"

const NavBar = () => {
    return (
      <Navbar className="navBar">
        <Container>
          <Link to="/" className='NavLink'>ALTRENO POINT</Link>
          <Nav className="me-auto">
            <NavLink to="/category/zapatillas" className={({isActive})=> isActive ? "NavOn" : "NavOff"}>Zapatillas</NavLink>
            <NavLink to="/category/botines" className={({isActive})=> isActive ? "NavOn" : "NavOff"}>Botines</NavLink>
            <NavLink to="/category/remeras" className={({isActive})=> isActive ? "NavOn" : "NavOff"}>Remeras</NavLink>
          </Nav>
          <NavLink  className='NavLink'>
            Carrtio<CartWidget />
          </NavLink>
        </Container>
      </Navbar>
  );
}
export default NavBar