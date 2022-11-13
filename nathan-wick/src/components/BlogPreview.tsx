import { useContext } from 'react';
import { Button, Col } from 'react-bootstrap';
import MobileContext from '../contexts/MobileContext';

const BlogPreview = (props: any) => {
    const isMobile = useContext(MobileContext);

    return (
        <Col
            lg={4}
            md={6}
            className={`${!isMobile && `p-4`} text-center`}>
            <div
                className='bg-dark rounded'>
                {
                    props.image ?
                        <img
                            className='w-100 rounded'
                            src={props.image}
                            alt={props.title}>
                        </img> : <></>
                }
                {
                    props.title ?
                        <h1
                            className='p-3'>
                            {props.title}
                        </h1> : <></>
                }
                {
                    props.text ?
                        <p>
                            {props.text}
                        </p> : <></>
                }
                {
                    props.link ?
                        <Button
                            variant='info'
                            href={props.link}
                            className='mb-3'>
                            Read More
                        </Button> : <></>
                }
            </div>
        </Col>
    );
};

export default BlogPreview;