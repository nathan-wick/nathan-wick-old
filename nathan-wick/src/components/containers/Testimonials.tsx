import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Testimonial from '../Testimonial';

const Testimonials = (props: any) => {
    const [viewWidth, setViewWidth] = useState(window.innerWidth);
    const viewWidthMobileBreakpoint = 768;

    useEffect(() => {
        window.addEventListener("resize", () => setViewWidth(window.innerWidth));
    }, []);

    return (
        <div
            className={`${viewWidth >= viewWidthMobileBreakpoint && `parallax`} bg-dark`}
            style={{
                backgroundImage: props.background && viewWidth >= viewWidthMobileBreakpoint ? `url(${props.background})` : `none`,
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