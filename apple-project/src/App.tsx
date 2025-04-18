import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CustomNavbar from "./component/CustomNavbar" // Navbar Mobile modificata
import MainContent from "./component/MainContent"
import Footer from "./component/Footer"
import Sidebar from "./component/SideBar" // Sidebar visibile su desktop

function App() {
  return (
    <Container fluid className="app-container">
      <Row>
        <Col xs={12} className="navbar-container">
          <CustomNavbar /> {/* Navbar visibile solo su mobile */}
        </Col>
      </Row>
      <Row>
        {/* Sidebar Desktop */}
        <Col lg={3} className="sidebar-container d-none d-lg-block">
          <Sidebar />
        </Col>
        <Col lg={9} xs={12} className="main-content-container">
          <MainContent />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="footer-container">
          <Footer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
