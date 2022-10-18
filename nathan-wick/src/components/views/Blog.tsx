import { Helmet } from 'react-helmet';
import Header from '../Header';
import BlogPreviews from '../containers/BlogPreviews';
import featuredBlogPreviewsBackground from '../../assets/images/laptop.webp';
import threeTraitsEveryGoodProgrammerHasImage from '../../assets/images/three-traits-every-good-programmer-has.webp';
import timeComplexityExplainedSimpleImage from '../../assets/images/time-complexity-explained-simple.webp';
import eightEssentialJavascriptDataStructuresImage from '../../assets/images/eight-essential-javascript-data-structures.webp';

const blogPreviews = [
    {
        image: threeTraitsEveryGoodProgrammerHasImage,
        title: '3 Traits Every Good Programmer Has',
        text: 'There are a few personality traits that all good programmers have in common. First, good programmers are...',
        link: '/blog/three-traits-every-good-programmer-has',
    },
    {
        image: timeComplexityExplainedSimpleImage,
        title: 'Time Complexity Explained Simple',
        text: 'In this blog, I will discuss common time complexities with helpful examples. Simply put, time complexity is...',
        link: '/blog/time-complexity-explained-simple',
    },
    {
        image: eightEssentialJavascriptDataStructuresImage,
        title: '8 Essential JavaScript Data Structures',
        text: 'In this blog, I will discuss the essential data structures that every programmer must know...',
        link: '/blog/eight-essential-javascript-data-structures',
    },
]

const Blog = (props: any) => {
    return (
        <>
            <Helmet>‍
                <title>Nathan Wick's Blog</title>
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