import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <header id="header">
           <Navbar expand="md" className="w-100">
                <Container>
                    <Link to="/" className="text-decoration-none"><Logo /></Link>
                    
                    {/* Hamburger Menu Toggle for Mobile */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Navigation Links */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className="nav-link text-light">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-link text-light">About</Nav.Link>
                            <Nav.Link as={Link} to="/products" className="nav-link text-light">Products</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-link text-light">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Cart Button */}
                    <Link to="/cart" className="btn btn-sm ms-2" style={{ backgroundColor: "#EFB036" }}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        {cartItems.length > 0 && <span className="badge badge-light">{cartItems.length}</span>}
                    </Link>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
