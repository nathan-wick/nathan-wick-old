import { Helmet } from 'react-helmet';
import Header from '../Header';
import HeaderIcon from '../../assets/images/profile-picture.webp';

const blogs = [
    {
        image: threeTraitsEveryGoodProgrammerHasImage,
        title: '3 Traits Every Good Programmer Has',
        text: 'There are a few personality traits that all good programmers have in common. First, good programmers are...',
    },
]

const Blogs = () => {
    return (
        <>
            <Helmet>‍
                <title>Nathan Wick - Blogs</title>
                <meta name='description' content='Learn Software Development with Nathan Wick.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                icon={HeaderIcon}
                title='Blogs'
                subtitle='Learn Software Development with Nathan Wick' />
        </>
    );
};

export default Blogs;