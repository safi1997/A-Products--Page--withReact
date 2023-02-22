import React from "react";
import { NavLink, Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <Navbar bg="light Regular shadow" expand="lg" className="mb-1">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <NavLink to="/" className="fs-5 text-dark mx-4 myLInk ">
              Home
            </NavLink>
            <NavLink to="/Products" className="fs-5 text-dark  myLInk">
              Products
            </NavLink>
          </Nav>
          <Form className="d-flex">
            {/* basket icon with number */}
            <Link to="/checkout" className="text-dark fs-4 myLInk">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                {/* number of items in the basket */}
                <span className="header_optionLineTwo header__productCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
