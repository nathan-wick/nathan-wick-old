import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import MobileContext from '../../contexts/MobileContext';
import BlogPreview from '../BlogPreview';

const BlogPreviews = (props: any) => {
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
                    props.blogPreviews.map((blogPreview: { image: any; title: any; text: any; link: any; }, index: any) =>
                        <BlogPreview
                            key={index}
                            image={blogPreview.image}
                            title={blogPreview.title}
                            text={blogPreview.text}
                            link={blogPreview.link} />
                    )
                }
            </Row>
        </div>
    );
};

export default BlogPreviews;