import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Navbar className='bg-transparent' collapseOnSelect expand="lg">
                <Container className='nav-container'>
                    <Navbar.Brand href="#home"><img className='ms-5 nav-img' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-center' id="responsive-navbar-nav">
                        <Nav className="my-2">
                            <input className='py-2 me-2 navbar-search text-white  rounded px-2' type="text" placeholder={'Search Your Destination..'} />
                            <Nav.Link className='me-2 text-white' href="#">News</Nav.Link>
                            <Nav.Link className='me-2 text-white' href="#">Destination</Nav.Link>
                            <Nav.Link className='me-2 text-white' href="#">Blog</Nav.Link>
                            <Nav.Link className='me-2 text-white' href="#">Contacts</Nav.Link>
                            <Nav.Link className='me-2 text-white login bg-warning px-3 rounded text-light fw-bold' href="#">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;