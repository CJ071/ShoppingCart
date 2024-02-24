import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useGetProducts from '../../hooks/GetProducts/GetProducts';

function ColorSchemesExample() {
  const products=useGetProducts()

  return (
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>ChrisShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/' >Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;