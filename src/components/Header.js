import { Navbar, Container, Image, Nav } from 'react-bootstrap';
import { BsBagFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import artStoreLogo from "../../src/art-store-logo.png";

function Header() {
  return (
    <header>
        <Navbar bg="light" expand="lg">
            <Container>
                <Image src={artStoreLogo} alt={"logo"} style={{width:"50px",height:"50px",padding:"10px"}}/>
                <br/>
                <Navbar.Brand href="#home">Academy Art Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/store">Store</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href=""><BsSearch /></Nav.Link>
                  <Nav.Link href=""><BsFillPersonFill /></Nav.Link>
                  <Nav.Link href=""><BsBagFill /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </header>
  );
}

export default Header;