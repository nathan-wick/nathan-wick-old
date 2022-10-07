import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import RatingIcon from '../assets/icons/rating.webp'

const Testimonial = (props: any) => {
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
                            className='pt-3'
                            style={{
                                width: `10em`
                            }}
                            src={props.image}
                            alt={props.name}>
                        </img> : <></>
                }
                {
                    props.name ?
                        <h1>
                            {props.name}
                        </h1> : <></>
                }
                {
                    props.relation ?
                        <p
                            className='text-bright'>
                            {props.relation}
                        </p> : <></>
                }
                <img
                    className='mb-3'
                    style={{
                        width: `10em`
                    }}
                    src={RatingIcon}
                    alt='5-Star Rating'>
                </img>
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

export default Testimonial;