import { Row } from 'react-bootstrap';
import Testimonial from '../Testimonial';

const Testimonials = (props: any) => {
    return (
        <div
            className='parallax'
            style={{
                backgroundImage: props.background ? `url(${props.background})` : `none`,
                backgroundSize: 'cover'
            }}>
            <Row>
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