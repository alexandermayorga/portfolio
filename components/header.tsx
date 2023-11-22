import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Link href="/" className="fs-3 navbar-brand">
            <span className="text-lemongrass">{"{ "}</span>
            <span className="text-sky me-1">a</span>
            <span className="text-magenta">m</span>
            <span className="text-lime">{" }"}</span>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/#projects" className="nav-link">
                Projects
              </Link>
              {/* <Link href="/#contact" className="nav-link">
                Contact
              </Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
