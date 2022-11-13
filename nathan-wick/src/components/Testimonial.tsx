import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import RatingIcon from '../assets/images/icons/rating.webp'
import MobileContext from '../contexts/MobileContext';

const Testimonial = (props: any) => {
    const isMobile = useContext(MobileContext);

    return (
        <Col
            lg={4}
            md={6}
            className={`${!isMobile && `p-4`} text-center`}>
            <div
                className='p-3 bg-dark rounded'>
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
                        <p>
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