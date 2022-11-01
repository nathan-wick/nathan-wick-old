import { Row } from 'react-bootstrap';
import BlogPreview from '../BlogPreview';

const BlogPreviews = (props: any) => {
    return (
        <div
            className={`${!props.isMobile && `parallax`}`}
            style={{
                backgroundImage: props.background && !props.isMobile ? `url(${props.background})` : `none`,
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