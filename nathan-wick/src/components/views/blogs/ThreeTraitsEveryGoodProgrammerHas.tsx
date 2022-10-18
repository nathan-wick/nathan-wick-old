import { Helmet } from 'react-helmet';
import Header from '../../Header';
import Text from '../../Text';

const ThreeTraitsEveryGoodProgrammerHas = (props: any) => {
    return (
        <>
            <Helmet>‍
                <title>Three Traits Every Good Programmer Has</title>
                <meta name='description' content='Three Traits Every Good Programmer Has.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                title='Three Traits Every Good Programmer Has'
                subtitle='By Nathan Wick 2022' />
            <Text 
                text='stuff' />
        </>
    );
};

export default ThreeTraitsEveryGoodProgrammerHas;