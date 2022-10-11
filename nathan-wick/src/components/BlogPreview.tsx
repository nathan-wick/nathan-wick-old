import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const BlogPreview = (props: any) => {
    const [viewWidth, setViewWidth] = useState(window.innerWidth);
    const viewWidthMobileBreakpoint = 768;

    useEffect(() => {
        window.addEventListener("resize", () => setViewWidth(window.innerWidth));
    }, []);

    return (
        <Col
            lg={4}
            md={6}
            className={`${viewWidth >= viewWidthMobileBreakpoint && `p-4`} text-center text-white`}>
            <div
                className='p-3 bg-dark'>
                {
                    props.image ?
                        <img
                            className='w-100'
                            src={props.image}
                            alt={props.title}>
                        </img> : <></>
                }
                {
                    props.title ?
                        <h1>
                            {props.title}
                        </h1> : <></>
                }
                {
                    props.text ?
                        <p>
                            {props.text}
                        </p> : <></>
                }
            </div>
        </Col>
    );
};

export default BlogPreview;