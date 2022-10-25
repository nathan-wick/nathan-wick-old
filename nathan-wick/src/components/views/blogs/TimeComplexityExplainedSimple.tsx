import { Helmet } from 'react-helmet';
import Header from '../../Header';
import Text from '../../Text';
import Heading from '../../Heading';
import CodeBlock from '../../CodeBlock';

const TimeComplexityExplainedSimple = (props: any) => {
    return (
        <>
            <Helmet>‍
                <title>Time Complexity Explained Simple</title>
                <meta name='description' content='Time Complexity Explained Simple.' />
                <meta name='robots' content='index, follow' />
            </Helmet>
            <Header
                title='Time Complexity Explained Simple'
                subtitle='By Nathan Wick' />
            <CodeBlock
                text={`const name = "Nate Dogg"`}
                isMobile={props.isMobile} />
        </>
    );
};

export default TimeComplexityExplainedSimple;