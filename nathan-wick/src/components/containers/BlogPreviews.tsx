import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BlogPreview from '../BlogPreview';

const BlogPreviews = (props: any) => {
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
            <Row
                className='m-0'>
                {
                    props.blogPreviews.map((blogPreview: { image: any; name: any; relation: any; text: any; }, index: any) =>
                        <BlogPreview
                            key={index}
                            image={blogPreview.image}
                            title={blogPreview.name}
                            text={blogPreview.text} />
                    )
                }
            </Row>
        </div>
    );
};

export default BlogPreviews;