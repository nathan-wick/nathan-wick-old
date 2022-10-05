const year = new Date().getFullYear();

const Footer = () =>
    <footer className='bg-dark text-light p-3'>
        <p>&copy; Nathan Wick - {year}</p>
    </footer>

export default Footer;