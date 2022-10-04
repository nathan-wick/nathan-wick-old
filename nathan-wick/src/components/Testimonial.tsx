import { Col } from 'react-bootstrap';
import RatingIcon from '../assets/icons/rating.png'

const Testimonial = (props: any) => {
    return (
        <Col
            md
            className='p-4 text-center text-white'>
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
                            className='text-muted'>
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
                <hr
                    className='m-3' />
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