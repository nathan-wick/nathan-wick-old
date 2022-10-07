import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Content = (props: any) => {
    const [viewWidth, setViewWidth] = useState(window.innerWidth);
    const viewWidthMobileBreakpoint = 768;

    useEffect(() => {
        window.addEventListener("resize", () => setViewWidth(window.innerWidth));
    }, []);

    const alignments = ['left', 'center', 'right'];

    return (
        <div
            className={`${viewWidth >= viewWidthMobileBreakpoint && `parallax p-4`} bg-dark text-white`}
            style={{
                backgroundImage: props.background && viewWidth >= viewWidthMobileBreakpoint ? `url(${props.background})` : `none`,
                backgroundSize: 'cover'}}>
            <Row>
                {
                    alignments.map((alignment, index) =>
                        props.alignment === alignment ?
                            <Col
                                key={index}
                                lg={4}
                                md={6}
                                className='bg-dark'>
                                {
                                    viewWidth < viewWidthMobileBreakpoint && props.background ?
                                        <img
                                            className='w-100'
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
                                            className='m-3 text-bright'>
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