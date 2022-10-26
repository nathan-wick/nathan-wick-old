import { Col, Row } from "react-bootstrap";
import packageInfo from "../../package.json"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='p-3'>
            <Row>
                <Col>
                    <p>Copyright &copy; {year} Nathan Wick. All rights reserved.</p>
                </Col>
                <Col style={{textAlign: `right`}}>
                    <p>App Version: {packageInfo.version}</p>
                </Col>
            </Row>
        </footer>
    );
}
    

export default Footer;