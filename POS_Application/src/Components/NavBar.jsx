import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import PropTypes from "prop-types"

export default function NavBar({handleSelect, handleSort}) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Grocery Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleSelect("all")}>All</Nav.Link>
            <Nav.Link onClick={() => handleSelect("fruit")}>Fruits</Nav.Link>
            <Nav.Link onClick={() => handleSelect("vegetable")}>
              Vegetables
            </Nav.Link>
            <NavDropdown
              title="Sort"
              id="navbarScrollingDropdown"
              onSelect={handleSort}
            >
              <NavDropdown.Item eventKey="title">title</NavDropdown.Item>
              <NavDropdown.Item eventKey="A-Z">A-Z</NavDropdown.Item>
              <NavDropdown.Item eventKey="Z-A">Z-A</NavDropdown.Item>
              <NavDropdown.Item eventKey="price_asc">
                low - high
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="price_desc">
                high - low
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action5">By Category</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Clear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
NavBar.propTypes = {
  handleSort : PropTypes.any,
  handleSelect : PropTypes.any
}