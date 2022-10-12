import { Helmet } from 'react-helmet';
import Header from '../Header';
import BlogPreviews from '../containers/BlogPreviews';
import HeaderIcon from '../../assets/images/profile-picture.webp';
import featuredBlogPreviewsBackground from '../../assets/images/laptop.webp';
import threeTraitsEveryGoodProgrammerHasImage from '../../assets/images/three-traits-every-good-programmer-has.webp';

const blogPreviews = [
    {
        image: threeTraitsEveryGoodProgrammerHasImage,
        title: '3 Traits Every Good Programmer Has',
        text: 'There are a few personality traits that all good programmers have in common. First, good programmers are...',
        link: '/about',
    },
]

const Blog = () => {
    return (
        <>
            <Helmet>‍
                <title>Nathan Wick - Blog</title>
                <meta name='description' content='Learn Software Development with Nathan Wick.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                title='Blog'
                subtitle='Learn Software Development with Nathan Wick' />
            <BlogPreviews
                background={featuredBlogPreviewsBackground}
                blogPreviews={blogPreviews} />
        </>
    );
};

export default Blog;