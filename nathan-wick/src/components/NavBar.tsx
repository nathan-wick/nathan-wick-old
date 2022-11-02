import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BrandIcon from '../assets/images/profile-picture.webp';

const NavBar = () => {
    const [ scroll, setScroll ] = useState(0);

    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = Math.round((Scrolled / MaxHeight) * 100);
        setScroll(ScrollPercent);
    };

    window.addEventListener("scroll", onScroll);

    return <>
        <Navbar bg="dark" expand="lg" variant='dark' sticky='top'>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="Nathan Wick"
                        src={BrandIcon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Nathan Wick
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <NavDropdown title="Socials" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/nathanwick/">LinkedIn</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/nathan-wick">GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCn8b9eTRvH1eiHYvbMHDmdA/featured">YouTube</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div
            className="scroll-indicator sticky-top"
            style={{ width: `${scroll}%` }}></div>
    </>;
};

export default NavBar;