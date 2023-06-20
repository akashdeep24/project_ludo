import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h5 style={{color:'white'}}>LetsLudo</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><h5 style={{color:'white'}}>Home</h5></Nav.Link>
            <Nav.Link href="#link"><h5 style={{color:'white'}}>Action</h5></Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">option</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;