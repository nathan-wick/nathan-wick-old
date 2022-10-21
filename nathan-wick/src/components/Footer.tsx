const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='p-3'>
            <p>Copyright &copy; Nathan Wick {year}</p>
        </footer>
    );
}
    

export default Footer;