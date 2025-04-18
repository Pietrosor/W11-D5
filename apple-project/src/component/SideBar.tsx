import Nav from "react-bootstrap/Nav"

function Sidebar() {
  return (
    <div className="sidebar d-none d-lg-flex">
      {" "}
      <Nav defaultActiveKey="#home" className="flex-column">
        <Nav.Link href="#home" className="sidebar-link text-black">
          <img src="./apple.svg" alt="" />
        </Nav.Link>
        <Nav.Link href="#home" className="sidebar-link text-black">
          Home
        </Nav.Link>
        <Nav.Link href="#novita" className="sidebar-link text-black">
          Novità
        </Nav.Link>
        <Nav.Link href="#playlist" className="sidebar-link text-black">
          Playlist
        </Nav.Link>
        <Nav.Link href="#radio" className="sidebar-link text-black">
          Radio
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default Sidebar
