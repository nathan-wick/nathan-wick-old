import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BrandIcon from '../assets/images/profile-picture.webp';
import LinkedInIcon from '../assets/icons/linkedin.webp';
import GitHubIcon from '../assets/icons/github.webp';
import YoutubeIcon from '../assets/icons/youtube.webp';
import StackOverflowIcon from '../assets/icons/stack-overflow.webp';

const NavBar = () => {
    const [ scroll, setScroll ] = useState(0);

    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };

    window.addEventListener("scroll", onScroll);

    return <>
        <div
            className="scroll-indicator sticky-top"
            style={{
                width: `${scroll}%`,
                zIndex: 1021,
            }}></div>
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
                            <NavDropdown.Item href="https://www.linkedin.com/in/nathanwick/">
                                <img
                                    alt="LinkedIn"
                                    src={LinkedInIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{' '}
                                LinkedIn
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/nathan-wick">
                                <img
                                    alt="LinkedIn"
                                    src={GitHubIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{' '}
                                GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCn8b9eTRvH1eiHYvbMHDmdA/featured">
                                <img
                                    alt="LinkedIn"
                                    src={YoutubeIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{' '}
                                YouTube
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://stackoverflow.com/users/15890157/nathan-wick">
                                <img
                                    alt="LinkedIn"
                                    src={StackOverflowIcon}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                />{' '}
                                Stack Overflow
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>;
};

export default NavBar;