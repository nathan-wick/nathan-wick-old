

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-dark text-light p-3'>
            <p>Copyright &copy; {year} Nathan Wick</p>
        </footer>
    );
}
    

export default Footer;