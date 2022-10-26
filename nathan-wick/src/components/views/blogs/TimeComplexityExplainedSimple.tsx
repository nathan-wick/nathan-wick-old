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
            <Text
                text='Time complexity is the number of times that a statement is executed. The lesser the Time Complexity, the faster the execution.'
                isMobile={props.isMobile} />
            <Heading
                text='O(1) - Constant Time Complexity'
                isMobile={props.isMobile} />
            <Text
                text='When time complexity is constant, the size of the input does not matter. This is the fastest time complexity.'
                isMobile={props.isMobile} />
            <CodeBlock
                text={`const userId = 24;

console.log("The user's id is " + userId);`}
                isMobile={props.isMobile} />
            <Heading
                text='O(n) - Linear Time Complexity'
                isMobile={props.isMobile} />
            <Text
                text='When time complexity is linear, the number of operations is proportional to the input (n) size.'
                isMobile={props.isMobile} />
            <CodeBlock
                text={`const userIdToFind = 24;
const userIds = Array(100).fill(1).map((n, i) => n + i);

userIds.forEach(userId => {
    if (userId === userIdToFind) {
        console.log("We found " + userIdToFind);
    } else {
        console.log(userId + " is NOT the user to find");
    }
});`}
                isMobile={props.isMobile} />
            <Heading
                text='O(log n) - Logarithmic Time Complexity'
                isMobile={props.isMobile} />
            <Text
                text='When time complexity is logarithmic, the number of operations is proportional to the logarithm of the input (n) size. Logarithmic time complexity happens when the algorithm does not need to go through all the input. This is accomplished by dividing the problem into sub-problems, solving the sub-problems, and combining the sub-problem answers to the problem. This is the second-fastest time complexity and is often used when constant time complexity is not achievable.'
                isMobile={props.isMobile} />
            <CodeBlock
                text={`const userIdToFind = 24;
const userIds = Array(100).fill(1).map((n, i) => n + i);
let minId = 0;
let maxId = userIds.length;

while (minId <= maxId) {
    let midValue = (minId + maxId) / 2;
    if (valueToFind === userIds[midValue]) {
        console.log("We found " + userIdToFind);
    } else if (userIdToFind < userIds[midValue]) {
        // The user id to find is somewhere between (minId + 1) and (midValue + 1)
        maxId = midValue - 1;
    } else {
        // The user id to find is somewhere between (midValue + 1) and (maxId + 2)
        minId = midValue + 1;
    }
}`}
                isMobile={props.isMobile} />
            <Heading
                text='O(n^2) - Quadratic Time Complexity'
                isMobile={props.isMobile} />
            <Text
                text='When time complexity is quadratic, the number of operations is proportional to the square of the input (n) size. Algorithms with a quadratic time complexity don’t scale well and can typically be avoided with a better algorithm.'
                isMobile={props.isMobile} />
            <CodeBlock
                text={`const name = "Nate Dogg"
const mew = "kitten"`}
                isMobile={props.isMobile} />
        </>
    );
};

export default TimeComplexityExplainedSimple;