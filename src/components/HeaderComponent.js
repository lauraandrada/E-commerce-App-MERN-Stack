import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" variant="dark" >
      <Container>

        {/* title button: */}
        <LinkContainer to="/">
          <Navbar.Brand href="/">E-commerce online shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            {/* categories dropdown: */}
            <InputGroup>
              {/* aligns the elements nicely*/}
              <DropdownButton id="dropdown-basic-button" title="Categories">
                <Dropdown.Item>Example</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search product..." />
              <Button variant="success">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>

            {/* admin button: */}
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            {/* user dropdown: */}
            <NavDropdown title="Example user" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/profile"
                as={Link}
                to="/user/profile"
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/user/my-orders"
                as={Link}
                to="/user/my-orders"
              >
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>

            {/* login and register buttons: */}
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>

            {/* cart button: */}
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="dark">
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">CART</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// export default CollapsibleExample;
export default HeaderComponent;
