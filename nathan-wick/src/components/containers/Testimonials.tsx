import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import MobileContext from '../../contexts/MobileContext';
import Testimonial from '../Testimonial';

const Testimonials = (props: any) => {
    const isMobile = useContext(MobileContext);

    return (
        <div
            className={`${!isMobile && `parallax`}`}
            style={{
                backgroundImage: props.background && !isMobile ? `url(${props.background})` : `none`,
                backgroundSize: 'cover'
            }}>
            <Row
                className='m-0'>
                {
                    props.testimonials.map((testimonial: { image: any; name: any; relation: any; text: any; }, index: any) =>
                        <Testimonial
                            key={index}
                            image={testimonial.image}
                            name={testimonial.name}
                            relation={testimonial.relation}
                            text={testimonial.text} />
                    )
                }
            </Row>
        </div>
    );
};

export default Testimonials;