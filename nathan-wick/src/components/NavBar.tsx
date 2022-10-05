import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () =>
    <Navbar bg="dark" expand="lg" variant='dark' sticky='top'>
        <Container>
            <Navbar.Brand href="/" className='text-cyan-500'>Nathan Wick</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/nathanwick/details/projects/">Projects</Nav.Link>
                <NavDropdown title="Socials" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://www.linkedin.com/in/nathanwick/">LinkedIn</NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/nathan-wick">GitHub</NavDropdown.Item>
                    <NavDropdown.Item href="https://www.youtube.com/channel/UCn8b9eTRvH1eiHYvbMHDmdA/featured">YouTube</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

export default NavBar;