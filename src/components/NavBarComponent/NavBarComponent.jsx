import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./NavBarComponent.css";

const NavBarComponent = ({ logo, navListItems }) => {
  const [navLink1, navLink2, navLink3, navLink4, navLink5, navLink6] =
    navListItems;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary nav-bar-style py-3 position-sticky top-0 w-100 z-3"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="nav-logo-style" src={logo} alt="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-1 gap-md-2 gap-lg-3 align-items-center">
            <Nav.Link className="fs-7 fw-medium" href="#">
              {navLink1?.value}
            </Nav.Link>
            <Nav.Link className="fs-7 fw-medium" href="#">
              {navLink2?.value}
            </Nav.Link>
            <Nav.Link className="fs-7 fw-medium" href="#">
              {navLink3?.value}
            </Nav.Link>
            <Nav.Link className="fs-7 fw-medium" href="#">
              {navLink4?.value}
            </Nav.Link>
            <Nav.Link className="fs-7 fw-medium" href="#">
              {navLink5?.value}
            </Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              {navListItems.map((ele, index) => {
                return ele.type === "navDropdown" ? (
                  <NavDropdown.Item
                    className="fs-7 fw-medium"
                    href="#"
                    key={index}
                  >
                    {ele?.value}
                  </NavDropdown.Item>
                ) : (
                  ""
                );
              })}
              <span className="m-2 d-none d-lg-inline-block d-xl-none">
                <ButtonComponent btnText="Make an Appointment" />
              </span>
            </NavDropdown>
            <Nav.Link className="fs-7 fw-medium" href="#">
              {navLink6?.value}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span className="ms-1 ms-md-2 ms-lg-3 d-lg-none d-xl-block">
          <ButtonComponent btnText="Make an Appointment" />
        </span>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
