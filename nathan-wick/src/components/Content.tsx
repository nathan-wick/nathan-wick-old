import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import MobileContext from "../contexts/MobileContext";

const Content = (props: any) => {
    const isMobile = useContext(MobileContext);
    const alignments = ['left', 'center', 'right'];

    return (
        <div
            className={`${!isMobile && `parallax p-4`}`}
            style={{
                backgroundImage: props.background && !isMobile ? `url(${props.background})` : `none`,
                backgroundSize: 'cover'}}>
            <Row
                className="m-0">
                {
                    alignments.map((alignment, index) =>
                        props.alignment === alignment ?
                            <Col
                                key={index}
                                lg={4}
                                md={6}
                                className='bg-dark rounded'>
                                {
                                    isMobile && props.background ?
                                        <img
                                            className='w-100 rounded'
                                            src={props.background}
                                            alt={props.title}>
                                        </img> : <></>
                                }
                                {
                                    props.title ?
                                        <h1
                                            className='m-3'>
                                            {props.title}
                                        </h1> : <></>
                                }
                                {
                                    props.subtitle ?
                                        <p
                                            className='m-3'>
                                            {props.subtitle}
                                        </p> : <></>
                                }
                                <hr
                                    className='m-3' />
                                {
                                    props.content ?
                                        <div
                                            className='m-3'>
                                            {props.content}
                                        </div> : <></>
                                }
                            </Col> : <Col key={index}></Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Content;