import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function MobileNavbar() {
  return (
    <Navbar expand="lg" className="mobile-navbar d-lg-none">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/apple.svg" alt="Apple Music Logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="mobile-nav" />
        <Navbar.Collapse id="mobile-nav">
          <Nav className="mobile-menu">
            <Nav.Link href="#home" className="mobile-link text-black">
              Home
            </Nav.Link>
            <Nav.Link href="#novita" className="mobile-link text-black">
              Novità
            </Nav.Link>
            <Nav.Link href="#playlist" className="mobile-link text-black">
              Playlist
            </Nav.Link>
            <Nav.Link href="#radio" className="mobile-link text-black">
              Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MobileNavbar
