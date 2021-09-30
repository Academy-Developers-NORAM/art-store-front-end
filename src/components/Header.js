import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';


function Header() {
  return (
    <header>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Academy Art Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Store</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </header>
  );
}

export default Header;