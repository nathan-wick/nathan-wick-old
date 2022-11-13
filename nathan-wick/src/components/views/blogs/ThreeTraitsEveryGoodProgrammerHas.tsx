import { Helmet } from 'react-helmet';
import Header from '../../Header';
import Text from '../../Text';
import Heading from '../../Heading';

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
                subtitle='By Nathan Wick' />
            <Heading
                text='Focus' />
            <Text
                text='First, good programmers are focused. Programming requires a lot of focus. Being focused allows programmers to learn faster, make better decisions, and solve problems quicker. With the average human attention span dwindling, it is more important than ever for programmers to practice good focusing habits. Setting clear goals, minimizing distractions, and being organized are great ways to stay focused.' />
            <Heading
                text='Diligence' />
            <Text 
                text='Second, good programmers are diligent. Programming is challenging. Good programmers do not give up when their program does not function correctly. Good programmers keep trying until their program is successful. If programmers gave up easily, nothing would ever get accomplished. Creating a schedule, not taking on more than you can handle, and getting a head start whenever possible are great ways to become diligent.' />
            <Heading
                text='Communication' />
            <Text 
                text='Third, good programmers are skilled communicators. Programmers regularly need to communicate with their clients and teammates. This is an important skill that is often overlooked by new programmers. Poor communication between the programmer and clients or teammates is frustrating for everyone involved. Listening more than speaking, knowing what you say, and staying aware of misunderstandings are great ways to become a skilled communicator.' />
        </>
    );
};

export default ThreeTraitsEveryGoodProgrammerHas;