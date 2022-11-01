import { Button, Col } from 'react-bootstrap';

const BlogPreview = (props: any) => {

    return (
        <Col
            lg={4}
            md={6}
            className={`${!props.isMobile && `p-4`} text-center`}>
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