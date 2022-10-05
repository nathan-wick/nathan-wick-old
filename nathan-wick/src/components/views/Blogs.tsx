import { Helmet } from 'react-helmet';
import Header from '../Header';
import HeaderIcon from '../../assets/images/profile-picture.webp';

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