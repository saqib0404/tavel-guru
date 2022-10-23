import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className=' mx-5 nav-img' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="my-2 d-flex justify-content-between">
                            <input className='mx-2 navbar-search rounded px-2' type="text" placeholder={'Search your place'} />
                            <Nav.Link className='mx-2' href="#">News</Nav.Link>
                            <Nav.Link className='mx-2' href="#">Destination</Nav.Link>
                            <Nav.Link className='mx-2' href="#">Blog</Nav.Link>
                            <Nav.Link className='mx-2' href="#">Contacts</Nav.Link>
                            <Nav.Link className='mx-2 login bg-warning px-3 rounded text-light fw-bold' href="#">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;