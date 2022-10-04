import { Col, Row } from "react-bootstrap";

const Content = (props: any) => {
    const alignments = ['left', 'center', 'right'];

    return (
        <div
            className='p-4 bg-dark text-white parallax'
            style={{
                backgroundImage: props.background ? `url(${props.background})` : `none`,
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
                                    props.title ?
                                        <h1
                                            className='m-3'>
                                            {props.title}
                                        </h1> : <></>
                                }
                                {
                                    props.subtitle ?
                                        <p
                                            className='m-3 text-muted'>
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